import { NivelRisco, NovaOcorrenciaInput } from "../types/Ocorrencia";

export type Cenario = "seguro" | "atencao" | "critico";
export type LeituraSimulada = { sensorId: string; distanciaCm: number; risco: NivelRisco; cenario: Cenario; instante: string; simulado: true };

// Limites ilustrativos para demonstracao. Nao representam limites operacionais da Motiva.
export function classificarDistancia(distanciaCm: number): NivelRisco {
  if (!Number.isFinite(distanciaCm) || distanciaCm < 0) throw new Error("Distancia invalida");
  if (distanciaCm <= 50) return "alto";
  if (distanciaCm <= 120) return "medio";
  return "baixo";
}
export function simularLeitura(cenario: Cenario): LeituraSimulada {
  const distancias: Record<Cenario, number> = { seguro: 180, atencao: 90, critico: 30 };
  const distanciaCm = distancias[cenario];
  return { sensorId: "HC-SR04-DEMO-01", distanciaCm, risco: classificarDistancia(distanciaCm), cenario, instante: new Date().toISOString(), simulado: true };
}
export function criarOcorrenciaDaLeitura(leitura: LeituraSimulada): NovaOcorrenciaInput {
  return {
    descricao: `DEMONSTRACAO - Leitura simulada ${leitura.sensorId}: ${leitura.distanciaCm} cm. Nao e uma medicao real.`,
    local: "Trecho demonstrativo (ficticio)", trecho: "KM demonstrativo - sem geolocalizacao real",
    risco: leitura.risco, distanciaCm: leitura.distanciaCm, validadoPorCamera: false,
    origem: "iot", operador: "Simulador GrassWatch",
  };
}
