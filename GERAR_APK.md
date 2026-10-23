# Como gerar o APK

## Pré-requisitos
- Node.js instalado
- Conta criada em https://expo.dev (gratuita)

## Passo a passo

```bash
# 1. Entra na pasta do projeto
cd grasswatch-final

# 2. Instala as dependências
npm install

# 3. Instala o EAS CLI globalmente
npm install -g eas-cli

# 4. Faz login na sua conta Expo
eas login

# 5. Gera o APK (profile "preview")
eas build -p android --profile preview
```

## O que acontece depois

- O EAS envia o build para os servidores da Expo
- Aguarde 5 a 15 minutos
- Ao final aparece um link para baixar o APK:
  `https://expo.dev/artifacts/eas/xxxxxxxx.apk`
- Baixe o APK e suba no Google Drive
- Cole o link do Drive no README

## Instalar o APK no Android

1. Baixar o arquivo `.apk` no celular Android
2. Ir em **Configurações → Segurança → Fontes desconhecidas** → Ativar
3. Abrir o arquivo e tocar em **Instalar**
4. Abrir o app **GrassWatch**

> Requer Android 10 ou superior.

## Testar antes de gerar o APK

```bash
npm install
npx expo start
```
Escaneie o QR code com o Expo Go no celular.
