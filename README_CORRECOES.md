# GrassWatch — versão revisada

## Correções realizadas
- Persistência local das ocorrências via AsyncStorage, com carregamento inicial antes da interface e IDs monotônicos durante a sessão.
- Captura real de fotografia com permissão de câmera via Expo Image Picker; foto exibida nos detalhes.
- Validação da distância numérica e indicação de entrada manual.
- Remoção de hora fictícia e status IoT falso: mostra **Não conectado**.
- Correção do duplo retorno após excluir uma ocorrência.
- Script `npm run typecheck`.

## Instalação
```bash
npm install
npx expo start
npm run typecheck
```

## Limitações importantes
- A fotografia é um anexo; **não** executa inferência de visão computacional. `validadoPorCamera` só deve ser verdadeiro quando houver verificação efetiva.
- A leitura de distância no cadastro é manual. Para sensores reais, é necessário conhecer hardware, protocolo, endpoint e autenticação; não foram inventados.
- Os registros de demonstração originais permanecem como dados iniciais apenas na primeira execução. Para remover os dados de exemplo, substitua `ocorrenciasMock` por `[]` no hook.
- A URI da imagem é local ao aparelho e pode deixar de funcionar após limpeza do cache/reinstalação; para armazenamento durável de fotos, implemente cópia para diretório permanente via expo-file-system ou upload autenticado.
- AsyncStorage não é um backend multiusuário; não oferece sincronização, auditoria, controle de acesso ou criptografia de dados.
- SDK Expo 51 foi preservado para evitar migração de versão não testada; planeje atualização usando `npx expo install --fix` após escolher o SDK de destino.
- Não foram executados build Android/iOS nem testes em hardware real neste ambiente.
