import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ocorrencia, NovaOcorrenciaInput, NivelRisco, StatusOcorrencia } from "../types/Ocorrencia";
import { ocorrenciasMock } from "../data/ocorrenciasMock";

export type FiltroAtivo = "todas" | NivelRisco | StatusOcorrencia;

export function useOcorrencias() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [carregando, setCarregando] = useState(true);
  const proximoIdRef = useRef(1);

  useEffect(() => {
    let ativo = true;
    (async () => {
      try {
        const salvo = await AsyncStorage.getItem("@grasswatch/ocorrencias-v1");
        const dados: Ocorrencia[] = salvo === null ? ocorrenciasMock : JSON.parse(salvo);
        if (!Array.isArray(dados)) throw new Error("Formato de armazenamento inválido");
        if (ativo) {
          proximoIdRef.current = Math.max(0, ...dados.map(o => o.id)) + 1;
          setOcorrencias(dados);
        }
      } catch (erro) {
        console.warn("Falha ao carregar ocorrências:", erro);
        if (ativo) {
          proximoIdRef.current = Math.max(0, ...ocorrenciasMock.map(o => o.id)) + 1;
          setOcorrencias(ocorrenciasMock);
        }
      } finally { if (ativo) setCarregando(false); }
    })();
    return () => { ativo = false; };
  }, []);

  useEffect(() => {
    if (carregando) return;
    AsyncStorage.setItem("@grasswatch/ocorrencias-v1", JSON.stringify(ocorrencias))
      .catch(erro => console.warn("Falha ao salvar ocorrências:", erro));
  }, [ocorrencias, carregando]);
  const [filtro, setFiltro] = useState<FiltroAtivo>("todas");

  const ocorrenciasFiltradas = ocorrencias.filter((o) => {
    if (filtro === "todas") return true;
    if (["baixo", "medio", "alto"].includes(filtro)) return o.risco === filtro;
    return o.status === filtro;
  });

  const contadores = {
    total:    ocorrencias.length,
    alto:     ocorrencias.filter((o) => o.risco === "alto").length,
    medio:    ocorrencias.filter((o) => o.risco === "medio").length,
    baixo:    ocorrencias.filter((o) => o.risco === "baixo").length,
    pendente: ocorrencias.filter((o) => o.status === "pendente").length,
  };

  function adicionarOcorrencia(input: NovaOcorrenciaInput) {
    const nova: Ocorrencia = {
      ...input,
      id: proximoIdRef.current++,
      data: new Date().toISOString(),
      status: "pendente",
    };
    setOcorrencias((prev) => [nova, ...prev]);
    return nova;
  }

  function atualizarStatus(id: number, status: StatusOcorrencia) {
    setOcorrencias((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }

  function excluirOcorrencia(id: number) {
    setOcorrencias((prev) => prev.filter((o) => o.id !== id));
  }

  return {
    ocorrencias, carregando,
    ocorrenciasFiltradas,
    filtro, setFiltro,
    contadores,
    adicionarOcorrencia,
    atualizarStatus,
    excluirOcorrencia,
  };
}
