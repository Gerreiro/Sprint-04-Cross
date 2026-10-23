# Publicação final — passos que exigem sua conta/dispositivo

## Preparação automatizável
- Execute `npm run check:delivery` para conferir estrutura e configuração do APK.
- Execute `npm install` e `npm run typecheck` em ambiente com acesso ao registro npm.

## Build EAS (requer autenticação na sua conta Expo)
1. `npx eas-cli login`
2. `npx eas-cli build --platform android --profile preview`
3. Aguarde o build na plataforma EAS e baixe o `.apk` indicado.

## Validação real no Android (requer dispositivo ou emulador)
Instale o APK e confira: abertura, lista, filtros, cadastro com valores válidos e inválidos, câmera/permissões, detalhe, status, exclusão, simulação dos três cenários e persistência após fechar/reabrir. Registre data, modelo, versão do Android e resultados em `CHECKLIST_TESTES.md`.

## GitHub (requer autorização na sua conta)
Crie um repositório para Sprint 4 ou uma branch do Sprint 3. Faça commit somente dos arquivos de código/documentação. Não adicione APK ao git; crie um GitHub Release e anexe o APK testado. Substitua o link pendente no README.

## Entrega
Publique o pitch não listado no YouTube, preencha os RMs e URLs em `ENTREGA_SPRINT4_MODELO.txt` e envie somente o `.txt`.

**Estado deste pacote:** sem APK compilado, sem testes em Android, sem publicação GitHub. Não afirmar que essas etapas foram concluídas.
