# GrassWatch — Challenge Motiva | Sprint 4

Aplicativo acadêmico em **React Native + Expo + TypeScript** para registrar, classificar e acompanhar ocorrências relacionadas à vegetação em trechos rodoviários. **A integração IoT é simulada; não há ESP32/HC-SR04 real conectado, análise automática por IA nem integração operacional com a Motiva.**

## Funcionalidades da versão entregue em código
- Listagem, filtros e indicadores de ocorrências.
- Cadastro, detalhes, atualização de status e exclusão.
- Armazenamento local com AsyncStorage.
- Captura de foto com `expo-image-picker` (requer permissão de câmera).
- Simulador didático do HC-SR04 com cenários seguro (180 cm), atenção (90 cm) e crítico (30 cm), com registro de ocorrência marcada como demonstração.

**Atenção:** distâncias e limiares de risco são exclusivamente ilustrativos; não são parâmetros operacionais de rodovia.

## Stack
Expo SDK 51, React Native 0.74, React 18, TypeScript, AsyncStorage e Expo Image Picker. SDK 51 é legado e deve ser migrado e validado antes de publicação em lojas.

## Executar localmente
```bash
npm install
npm run typecheck
npx expo start
```

## Gerar APK Android com EAS
Pré-requisitos: Node.js, conta Expo, `npm install` e login no EAS. O arquivo `eas.json` possui perfil `preview` com `android.buildType=apk`.
```bash
npm install
npx eas-cli login
npx eas-cli build --platform android --profile preview
```
Quando o build terminar, baixe o APK pela URL fornecida pelo EAS. **Instale em um dispositivo Android e valide todos os fluxos.** Para distribuir, publique o APK em GitHub Releases ou Google Drive e substitua o campo abaixo pelo link público de download.

**APK final:** [PENDENTE — inserir URL pública do APK compilado e testado]

## Instalação do APK
1. Abra no Android o link público do APK acima.
2. Baixe o arquivo e autorize a instalação por essa fonte quando o Android solicitar.
3. Instale e abra o GrassWatch.
4. Teste o simulador, cadastro, fotos, filtros e mudança de status.

## Plano de negócio
Leia [PLANO_DE_NEGOCIO.md](./PLANO_DE_NEGOCIO.md) — público-alvo, proposta de valor, modelo de receita, custos hipotéticos, riscos e métricas de impacto.

## Pitch final
**Vídeo de até 5 minutos:** [PENDENTE — inserir URL do YouTube não listado]. A narração e demonstração devem ser realizadas pelos integrantes do grupo, sem voz gerada por IA. Roteiro em [ROTEIRO_PITCH.md](./ROTEIRO_PITCH.md).

## Evolução por Sprint
| Sprint | Entregas / histórico |
|---|---|
| 1 | [PREENCHER com entregas comprovadas da Sprint 1 e link correspondente] |
| 2 | [PREENCHER com entregas comprovadas da Sprint 2 e link correspondente] |
| 3 | Protótipo com ocorrências, riscos, filtros e documentação de testes. Referência: https://github.com/Gerreiro/Sprint-03-Cross |
| 4 | Persistência local, captura de foto, simulador IoT demonstrativo, documentação comercial e preparação para APK/pitch. Build e testes em Android pendentes. |

## Testes e limitações
Leia [CHECKLIST_TESTES.md](./CHECKLIST_TESTES.md). O aplicativo **não foi validado em dispositivo físico neste pacote**. O simulador não fornece medições reais. O armazenamento local não sincroniza entre dispositivos. Não há autenticação, backend de produção ou notificações push. Para implantação real, são necessárias validação técnica, segurança, LGPD, infraestrutura e integração com sensores.

## Entrega da FIAP
A submissão é **somente um arquivo `.txt`** contendo integrantes/RMs, link do repositório final, link público do APK e link do pitch. Modelo em [ENTREGA_SPRINT4_MODELO.txt](./ENTREGA_SPRINT4_MODELO.txt). Não enviar APK binário dentro do repositório.

## Publicação e validação final
Consulte [GUIA_PUBLICACAO.md](./GUIA_PUBLICACAO.md). Verifique a estrutura com `npm run check:delivery` (não substitui compilação nem testes reais).
