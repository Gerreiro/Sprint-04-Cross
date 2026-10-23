import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Cenario, LeituraSimulada, simularLeitura } from "../utils/simulador";

type Props = { onVoltar: () => void; onRegistrar: (leitura: LeituraSimulada) => void };
const CENARIOS: { id: Cenario; titulo: string; explicacao: string }[] = [
  { id: "seguro", titulo: "Seguro - 180 cm", explicacao: "Vegetacao distante: risco baixo" },
  { id: "atencao", titulo: "Atencao - 90 cm", explicacao: "Vegetacao aproximando-se: risco medio" },
  { id: "critico", titulo: "Critico - 30 cm", explicacao: "Vegetacao proxima: risco alto" },
];
export function SimuladorScreen({ onVoltar, onRegistrar }: Props) {
  const [leitura, setLeitura] = useState<LeituraSimulada | null>(null);
  return <SafeAreaView style={s.container}><ScrollView contentContainerStyle={s.content}>
    <TouchableOpacity onPress={onVoltar}><Text style={s.link}>← Voltar às ocorrências</Text></TouchableOpacity>
    <Text style={s.titulo}>Simulador IoT</Text>
    <Text style={s.aviso}>MODO DEMONSTRAÇÃO — dados 100% simulados. Nenhum ESP32 ou sensor físico está conectado.</Text>
    <Text style={s.texto}>Escolha um cenário para simular uma leitura do HC-SR04. Os limites de risco são ilustrativos e devem ser validados antes de qualquer uso em rodovias.</Text>
    {CENARIOS.map(c => <TouchableOpacity key={c.id} style={s.card} onPress={() => setLeitura(simularLeitura(c.id))}>
      <Text style={s.cardTitulo}>{c.titulo}</Text><Text>{c.explicacao}</Text>
    </TouchableOpacity>)}
    {leitura && <View style={s.resultado}>
      <Text style={s.cardTitulo}>Leitura simulada</Text>
      <Text>Sensor: {leitura.sensorId}</Text><Text>Distância: {leitura.distanciaCm} cm</Text>
      <Text>Risco: {leitura.risco.toUpperCase()}</Text><Text>Horário: {new Date(leitura.instante).toLocaleString("pt-BR")}</Text>
      <TouchableOpacity style={s.botao} onPress={() => Alert.alert("Registrar demonstração", "Criar ocorrência local identificada como simulada?", [
        { text: "Cancelar", style: "cancel" }, { text: "Registrar", onPress: () => onRegistrar(leitura) },
      ])}><Text style={s.botaoTexto}>Registrar ocorrência simulada</Text></TouchableOpacity>
    </View>}
  </ScrollView></SafeAreaView>;
}
const s = StyleSheet.create({ container:{flex:1,backgroundColor:"#F6F8F5"},content:{padding:22,gap:16},link:{color:"#22654B",fontSize:16},titulo:{fontSize:26,fontWeight:"bold",color:"#173B2C"},aviso:{backgroundColor:"#FFF0CB",padding:14,borderRadius:10,color:"#694700",fontWeight:"bold"},texto:{lineHeight:22,color:"#334B40"},card:{backgroundColor:"white",padding:18,borderRadius:12,borderWidth:1,borderColor:"#DDE5DC",gap:5},cardTitulo:{fontSize:17,fontWeight:"bold",color:"#173B2C"},resultado:{padding:18,backgroundColor:"#E7F3EA",borderRadius:12,gap:9},botao:{backgroundColor:"#246B4D",padding:15,borderRadius:10,marginTop:10},botaoTexto:{textAlign:"center",color:"white",fontWeight:"bold"} });
