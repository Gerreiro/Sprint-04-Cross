import React, { useState } from "react";
import { NovaOcorrenciaInput } from "./src/types/Ocorrencia";
import { useOcorrencias } from "./src/hooks/useOcorrencias";
import { ListaScreen }    from "./src/screens/ListaScreen";
import { CadastroScreen } from "./src/screens/CadastroScreen";
import { ActivityIndicator, View, Text } from "react-native";
import { SimuladorScreen } from "./src/screens/SimuladorScreen";
import { criarOcorrenciaDaLeitura } from "./src/utils/simulador";
import { DetalheScreen }  from "./src/screens/DetalheScreen";

type Tela = "lista" | "cadastro" | "detalhe" | "simulador";

export default function App() {
  const [tela, setTela]                   = useState<Tela>("lista");
  const [idSelecionado, setIdSelecionado] = useState<number | null>(null);

  const {
    ocorrencias, carregando, ocorrenciasFiltradas,
    filtro, setFiltro, contadores,
    adicionarOcorrencia, atualizarStatus, excluirOcorrencia,
  } = useOcorrencias();

  if (carregando) return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><ActivityIndicator size="large" /><Text>Carregando ocorrências...</Text></View>;

  // Sempre busca a versão mais recente — evita estado stale
  const ocorrenciaSelecionada = idSelecionado !== null
    ? ocorrencias.find((o) => o.id === idSelecionado) ?? null
    : null;

  if (tela === "simulador") return <SimuladorScreen onVoltar={() => setTela("lista")} onRegistrar={(leitura) => { adicionarOcorrencia(criarOcorrenciaDaLeitura(leitura)); setFiltro("todas"); setTela("lista"); }} />;

  if (tela === "cadastro") {
    return (
      <CadastroScreen
        onSalvar={(input: NovaOcorrenciaInput) => { adicionarOcorrencia(input); setTela("lista"); }}
        onVoltar={() => setTela("lista")}
      />
    );
  }

  if (tela === "detalhe" && ocorrenciaSelecionada) {
    return (
      <DetalheScreen
        ocorrencia={ocorrenciaSelecionada}
        onVoltar={() => setTela("lista")}
        onAtualizarStatus={atualizarStatus}
        onExcluir={(id) => { excluirOcorrencia(id); setTela("lista"); }}
      />
    );
  }

  return (
    <ListaScreen
      ocorrencias={ocorrenciasFiltradas}
      filtro={filtro}
      onSetFiltro={setFiltro}
      contadores={contadores}
      onVerDetalhe={(o) => { setIdSelecionado(o.id); setTela("detalhe"); }}
      onNova={() => setTela("cadastro")}
      onSimulador={() => setTela("simulador")}
    />
  );
}
