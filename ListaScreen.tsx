import React from "react";
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView,
} from "react-native";
import { Ocorrencia } from "../types/Ocorrencia";
import { OcorrenciaCard } from "../components/OcorrenciaCard";
import { AppStatusBar } from "../components/AppStatusBar";
import { FiltroAtivo } from "../hooks/useOcorrencias";
import { CORES } from "../utils/theme";


type Props = {
  ocorrencias: Ocorrencia[];
  filtro: FiltroAtivo;
  onSetFiltro: (f: FiltroAtivo) => void;
  contadores: { total: number; alto: number; medio: number; baixo: number; pendente: number };
  onVerDetalhe: (o: Ocorrencia) => void;
  onNova: () => void;
  onSimulador: () => void;
};

const FILTROS: { key: FiltroAtivo; label: string }[] = [
  { key: "todas",       label: "Todas"      },
  { key: "pendente",    label: "Pendentes"  },
  { key: "alto",        label: "Alto"       },
  { key: "medio",       label: "Médio"      },
  { key: "baixo",       label: "Baixo"      },
  { key: "resolvido",   label: "Resolvidas" },
];

export function ListaScreen({ ocorrencias, filtro, onSetFiltro, contadores, onVerDetalhe, onNova, onSimulador }: Props) {
  const alertasAltos = ocorrencias.filter((a) => a.origem === "iot" && a.risco === "alto" && a.status !== "resolvido");

  return (
    <SafeAreaView style={styles.safe}>
      <AppStatusBar />

      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>🌿 GrassWatch</Text>
          <Text style={styles.subtitulo}>{contadores.total} ocorrências · {contadores.pendente} pendentes</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={onNova}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSimulador} style={{ marginHorizontal: 16, marginTop: 10, backgroundColor: "#E7F3EA", padding: 13, borderRadius: 10 }}><Text style={{ color: "#175337", fontWeight: "bold", textAlign: "center" }}>🧪 Abrir simulador IoT (demonstração)</Text></TouchableOpacity>
      {/* Contadores */}
      <View style={styles.contadores}>
        {[
          { label: "Alto",  num: contadores.alto,  bg: "#FCEBEB", cor: "#A32D2D" },
          { label: "Médio", num: contadores.medio, bg: "#FAEEDA", cor: "#854F0B" },
          { label: "Baixo", num: contadores.baixo, bg: "#EAF3DE", cor: "#27500A" },
        ].map((c) => (
          <View key={c.label} style={[styles.contador, { backgroundColor: c.bg }]}>
            <Text style={[styles.contadorNum, { color: c.cor }]}>{c.num}</Text>
            <Text style={[styles.contadorLabel, { color: c.cor }]}>{c.label}</Text>
          </View>
        ))}
      </View>

      {/* Banner IoT */}
      {alertasAltos.length > 0 && (
        <View style={styles.banner}>
          <Text style={styles.bannerTitulo}>⚠  {alertasAltos.length} alerta{alertasAltos.length > 1 ? "s" : ""} de leituras simuladas</Text>
          {alertasAltos.map((a) => (
            <Text key={String(a.id)} style={styles.bannerItem}>· {a.trecho} — {a.distanciaCm} cm (simulado)</Text>
          ))}
        </View>
      )}

      {/* Filtros */}
      <FlatList
        data={FILTROS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(f) => f.key}
        contentContainerStyle={styles.filtros}
        renderItem={({ item: f }) => (
          <TouchableOpacity
            style={[styles.filtroBtn, filtro === f.key && styles.filtroBtnAtivo]}
            onPress={() => onSetFiltro(f.key)}
          >
            <Text style={[styles.filtroText, filtro === f.key && styles.filtroTextAtivo]}>{f.label}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Lista */}
      <FlatList
        data={ocorrencias}
        keyExtractor={(o) => String(o.id)}
        renderItem={({ item }) => <OcorrenciaCard ocorrencia={item} onPress={onVerDetalhe} />}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Text style={styles.vazioIcon}>📋</Text>
            <Text style={styles.vazioTitulo}>Nenhuma ocorrência</Text>
            <Text style={styles.vazioSub}>
              {filtro === "todas"
                ? "Toque em + para registrar a primeira ocorrência."
                : "Nenhuma ocorrência para este filtro."}
            </Text>
          </View>
        }
        ListFooterComponent={ocorrencias.length > 0
          ? <Text style={styles.rodape}>{ocorrencias.length} ocorrência{ocorrencias.length !== 1 ? "s" : ""}</Text>
          : null}
      />

      <TouchableOpacity style={styles.fab} onPress={onNova}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: CORES.fundo },
  header: { backgroundColor: "#1A3A2E", paddingHorizontal: 20, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  titulo: { color: "#FFF", fontSize: 18, fontWeight: "700" },
  subtitulo: { color: "#A0D4B8", fontSize: 11, marginTop: 2 },
  addBtn: { backgroundColor: "#1D9E75", width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  addBtnText: { color: "#FFF", fontSize: 24, lineHeight: 30, fontWeight: "300" },
  contadores: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 10, gap: 10, backgroundColor: "#1A3A2E" },
  contador: { flex: 1, borderRadius: 10, paddingVertical: 8, alignItems: "center" },
  contadorNum: { fontSize: 20, fontWeight: "700" },
  contadorLabel: { fontSize: 11, fontWeight: "600", marginTop: 1 },
  banner: { marginHorizontal: 16, marginTop: 12, marginBottom: 2, backgroundColor: "#FAEEDA", borderRadius: 8, borderWidth: 0.5, borderColor: "#FAC775", padding: 12 },
  bannerTitulo: { color: "#633806", fontSize: 12, fontWeight: "700", marginBottom: 4 },
  bannerItem: { color: "#854F0B", fontSize: 11, marginTop: 2 },
  filtros: { gap: 8, paddingHorizontal: 16, paddingVertical: 10 },
  filtroBtn: { paddingVertical: 7, paddingHorizontal: 14, borderRadius: 20, backgroundColor: "#E8EDE9" },
  filtroBtnAtivo: { backgroundColor: "#1A3A2E" },
  filtroText: { fontSize: 12, color: CORES.textoS, fontWeight: "500" },
  filtroTextAtivo: { color: "#FFF", fontWeight: "700" },
  lista: { paddingHorizontal: 16, paddingBottom: 100, paddingTop: 4 },
  vazio: { alignItems: "center", paddingTop: 60, paddingHorizontal: 32 },
  vazioIcon: { fontSize: 40, marginBottom: 12 },
  vazioTitulo: { fontSize: 16, fontWeight: "600", color: CORES.textoS, marginBottom: 6 },
  vazioSub: { fontSize: 13, color: CORES.textoT, textAlign: "center", lineHeight: 20 },
  rodape: { textAlign: "center", color: CORES.textoT, fontSize: 12, paddingVertical: 8 },
  fab: { position: "absolute", bottom: 28, right: 20, width: 56, height: 56, borderRadius: 28, backgroundColor: "#1D9E75", alignItems: "center", justifyContent: "center", elevation: 4 },
  fabText: { color: "#FFF", fontSize: 28, fontWeight: "300", lineHeight: 34 },
});
