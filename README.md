# 🌿 GrassWatch

**Sistema de Monitoramento Inteligente de Vegetação Rodoviária**

> FIAP — Challenge Motiva  
> Documentação consolidada — Sprint 4  
> Aplicativo mobile desenvolvido com React Native, Expo e TypeScript

---

## 👥 Equipe

| Integrante | RM |
|---|---|
| Samuel Nunes | 564435 |
| Henry dos Santos | 565309 |
| JOAO VITOR LIMA | 566541 |
| Miguel Vanucci Delgado | 563491 |

## 1. Apresentação do projeto

O **GrassWatch** é uma proposta de solução tecnológica para auxiliar o monitoramento e o gerenciamento de ocorrências relacionadas ao crescimento da vegetação nas margens das rodovias.

O projeto foi desenvolvido para o Challenge Motiva, utilizando conceitos de desenvolvimento mobile, Internet das Coisas (IoT) e gerenciamento de informações operacionais.

A solução combina um aplicativo Android com a proposta de utilização de sensores ultrassônicos para monitoramento da vegetação.

**Nesta versão, as leituras dos sensores são simuladas.** A integração com dispositivos ESP32 e sensores HC-SR04 físicos faz parte da arquitetura proposta para uma futura implantação.

## 2. Problema identificado

O crescimento excessivo da vegetação próximo às rodovias pode comprometer a visibilidade dos motoristas, dificultar a identificação da sinalização e aumentar a necessidade de manutenção.

O acompanhamento manual de extensos trechos rodoviários pode exigir deslocamentos frequentes e dificultar a identificação antecipada de situações críticas.

Além disso, a ausência de registros organizados pode prejudicar a priorização das intervenções.

O GrassWatch busca contribuir para a solução desses problemas por meio da centralização das ocorrências e da classificação dos riscos identificados.

## 3. Solução proposta

O GrassWatch oferece uma interface mobile para que operadores registrem e acompanhem situações relacionadas à vegetação rodoviária.

As principais capacidades do protótipo são:

- Cadastro de ocorrências com identificação do trecho e da localização.
- Classificação em níveis de risco baixo, médio e alto.
- Registro do operador responsável.
- Captura de fotografias.
- Consulta e filtragem de ocorrências.
- Acompanhamento do status das ocorrências.
- Simulação de leituras IoT.
- Exibição de alertas simulados de risco alto.

A proposta futura é integrar sensores físicos e um serviço de armazenamento centralizado, permitindo o recebimento de medições de diferentes pontos da rodovia.

## 4. Público-alvo

O projeto foi pensado para dois perfis principais.

**Operador de campo:** responsável por identificar situações, cadastrar ocorrências, fotografar trechos e atualizar as informações operacionais.

**Supervisor:** responsável por consultar as ocorrências, acompanhar os níveis de risco e apoiar a priorização das atividades de manutenção.

A solução também poderia atender concessionárias de rodovias e empresas especializadas em conservação de infraestrutura.

---

## 5. Evolução do projeto — Sprint 3 e Sprint 4

### Sprint 3 — Desenvolvimento do protótipo mobile

A Sprint 3 concentrou-se na implementação das funcionalidades fundamentais do aplicativo.

Foram desenvolvidos recursos para registrar, visualizar, classificar e acompanhar ocorrências utilizando dados simulados.

**Principais entregas:**

- Interface mobile em React Native.
- Estrutura do projeto em TypeScript.
- Listagem de ocorrências.
- Filtros por risco e status.
- Contadores de ocorrências.
- Cadastro com validação de campos.
- Consulta aos detalhes.
- Atualização de status.
- Exclusão com confirmação.
- Cenários de demonstração com dados mockados.
- Exibição de alertas associados a registros simulados.

**Resultado:** protótipo funcional para demonstrar o fluxo básico de gerenciamento de ocorrências.

### Sprint 4 — Consolidação e entrega Android

A Sprint 4 concentrou-se na consolidação da aplicação e na preparação de uma versão instalável para Android.

**Principais atividades:**

- Revisão dos componentes do aplicativo.
- Correção dos erros de tipagem TypeScript.
- Ajustes no cadastro e na listagem de ocorrências.
- Integração da captura de fotografias pelo Expo Image Picker.
- Disponibilização do simulador IoT.
- Preparação da compilação com Expo EAS Build.
- Geração do arquivo APK Android.
- Consolidação da documentação técnica.
- Estruturação do plano de negócios.
- Planejamento dos testes funcionais.

**Resultado:** versão Android compilada e disponibilizada por link para instalação e validação.

### Comparativo entre as sprints

| Aspecto | Sprint 3 | Sprint 4 |
|---|---|---|
| Aplicativo mobile | Protótipo | Versão consolidada |
| Cadastro de ocorrências | Implementado | Revisado |
| Listagem e filtros | Implementados | Revisados |
| Dados IoT | Simulados | Simulador de demonstração |
| Captura de fotos | Prevista | Implementada |
| Verificação TypeScript | Desenvolvimento | Erros identificados corrigidos |
| APK Android | Não documentado | Gerado |
| Documentação | Protótipo | Consolidada |
| Plano de negócios | Não documentado | Proposta estruturada |

---

## 6. Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React Native | Desenvolvimento mobile |
| Expo | Ambiente de desenvolvimento |
| TypeScript | Tipagem e organização do código |
| JavaScript | Lógica da aplicação |
| Expo Image Picker | Captura de imagens |
| Expo EAS Build | Compilação Android |
| GitHub | Versionamento e compartilhamento |
| ESP32 | Microcontrolador da arquitetura proposta |
| HC-SR04 | Sensor ultrassônico da arquitetura proposta |

O aplicativo utiliza simulações para demonstrar o comportamento de leituras IoT.

Firebase Realtime Database, autenticação e comunicação com sensores físicos não estão confirmados como implementados na versão entregue.

---

## 7. Funcionalidades

| Funcionalidade | Situação |
|---|---|
| Listagem de ocorrências | Implementada |
| Filtros por risco e status | Implementada |
| Contadores por nível de risco | Implementada |
| Cadastro de ocorrências | Implementada |
| Validação de campos | Implementada |
| Detalhamento de ocorrências | Implementada |
| Atualização de status | Implementada |
| Exclusão de ocorrências | Implementada |
| Alertas IoT simulados | Implementada |
| Simulador IoT | Implementada |
| Captura de fotografias | Implementada |
| Compilação APK Android | Concluída |
| Integração com sensor físico | Não implementada |
| Firebase Realtime Database | Não confirmada |
| Autenticação de usuários | Não implementada |
| Análise automática de imagens por IA | Não implementada |

### 7.1 Cadastro de ocorrências

O formulário permite informar trecho da rodovia, localização, operador responsável, descrição, distância e nível de risco.

Campos obrigatórios são validados antes do registro.

Ocorrências classificadas como risco alto exigem confirmação do operador.

### 7.2 Classificação de risco

O sistema utiliza três níveis:

| Nível | Interpretação |
|---|---|
| Baixo | Situação de menor prioridade |
| Médio | Situação que requer acompanhamento |
| Alto | Situação prioritária |

A classificação apresentada no cadastro manual é selecionada pelo operador.

### 7.3 Acompanhamento das ocorrências

O aplicativo permite consultar ocorrências e utilizar filtros para facilitar a visualização.

O fluxo de acompanhamento contempla os estados pendente, em andamento e resolvido.

### 7.4 Simulador IoT

O simulador representa medições associadas ao monitoramento da vegetação.

Sua finalidade é demonstrar o fluxo de identificação e registro de situações de risco sem exigir hardware físico.

Os dados simulados não devem ser interpretados como medições reais realizadas em rodovias.

### 7.5 Captura de fotografias

A captura utiliza o Expo Image Picker e depende da permissão de câmera do dispositivo.

A fotografia pode ser associada à ocorrência como evidência visual.

Não existe validação automática da imagem por inteligência artificial nesta versão.

---

## 8. Arquitetura da solução

### Arquitetura do protótipo

```text
Operador
   |
   v
Aplicativo GrassWatch
   |
   +--> Cadastro de ocorrências
   |
   +--> Listagem e filtros
   |
   +--> Consulta e atualização
   |
   +--> Captura de fotografias
   |
   +--> Simulador IoT
            |
            v
      Leituras simuladas
            |
            v
      Alertas e registros
```

### Arquitetura proposta para implantação futura

```text
Vegetação rodoviária
         |
         v
Sensor ultrassônico HC-SR04
         |
         v
Microcontrolador ESP32
         |
         v
Rede de comunicação
         |
         v
Backend e banco de dados
         |
         v
Aplicativo GrassWatch
         |
         v
Equipe de manutenção
```

A segunda arquitetura representa uma proposta de evolução e não uma integração física já concluída.

---

## 9. Cenários de demonstração

| Cenário | Representação no protótipo |
|---|---|
| Risco alto e pendente | Ocorrência prioritária |
| Risco médio em andamento | Ocorrência em acompanhamento |
| Risco baixo resolvido | Ocorrência finalizada |
| Registro sem validação por câmera | Ocorrência sem análise automática |
| Múltiplos alertas simulados | Demonstração de alertas IoT |
| Filtro sem resultados | Mensagem de lista vazia |

Esses cenários permitem apresentar o funcionamento das interfaces em diferentes situações.

---

## 10. Como executar o projeto

### Pré-requisitos

- Node.js e npm.
- Visual Studio Code ou outro editor.
- Ambiente Expo compatível.
- Emulador Android ou dispositivo compatível para testes.

### Clonar o repositório

```bash
git clone https://github.com/Gerreiro/Sprint-03-Cross.git
```

Acesse o diretório que contém o arquivo `package.json`.

### Instalar dependências

```bash
npm install
```

### Iniciar o Expo

```bash
npx expo start
```

### Windows PowerShell

Caso exista bloqueio de execução dos scripts do npm:

```powershell
npm.cmd install
npx.cmd expo start
```

### Verificar TypeScript

```powershell
npm.cmd run typecheck
```

O comando foi executado durante a preparação da Sprint 4, e os erros anteriormente identificados foram corrigidos.

---

## 11. APK Android — Sprint 4

O GrassWatch foi compilado utilizando o Expo EAS Build.

### Download

**[📱 Baixar APK do GrassWatch](https://expo.dev/artifacts/eas/FSlRiZhJfxkxQN5JUomLba9zS1oTu67L4WLYbIKKIfg.apk)**

Link direto:

https://expo.dev/artifacts/eas/FSlRiZhJfxkxQN5JUomLba9zS1oTu67L4WLYbIKKIfg.apk

### Instalação

1. Baixe o APK.
2. Instale-o em um dispositivo Android ou emulador compatível.
3. Abra o aplicativo.
4. Teste o cadastro, os filtros, os detalhes e o simulador IoT.

### Gerar uma nova compilação

```powershell
npx.cmd eas-cli build --platform android --profile preview
```

O perfil `preview` deve estar configurado no `eas.json` para produzir um APK instalável.

---

## 12. Testes e validação

### 12.1 Objetivo

Verificar se o aplicativo inicia corretamente, permite o registro de ocorrências e apresenta o comportamento esperado das funcionalidades principais.

### 12.2 Matriz de testes

| ID | Teste | Resultado esperado | Resultado obtido |
|---|---|---|---|
| T01 | Inicialização | Abrir a tela principal | A testar |
| T02 | Cadastro válido | Registrar ocorrência | A testar |
| T03 | Cadastro sem trecho | Exibir erro obrigatório | A testar |
| T04 | Cadastro sem operador | Exibir erro obrigatório | A testar |
| T05 | Risco alto | Solicitar confirmação | A testar |
| T06 | Filtro por risco | Exibir registros correspondentes | A testar |
| T07 | Filtro sem registros | Exibir estado vazio | A testar |
| T08 | Detalhamento | Exibir dados da ocorrência | A testar |
| T09 | Atualização de status | Atualizar ocorrência | A testar |
| T10 | Exclusão | Solicitar confirmação | A testar |
| T11 | Simulador IoT | Demonstrar leitura simulada | A testar |
| T12 | Alerta de risco alto | Exibir alerta correspondente | A testar |
| T13 | Captura de foto | Abrir câmera e anexar imagem | A testar |

### 12.3 Verificação estática

**Teste realizado:** execução do comando `npm run typecheck`.

**Resultado informado:** verificação concluída sem erros após as correções nas telas `CadastroScreen.tsx` e `ListaScreen.tsx`.

### 12.4 Compilação Android

**Teste realizado:** compilação utilizando Expo EAS Build.

**Resultado:** APK gerado e link disponibilizado.

### 12.5 Testes funcionais Android

**Situação:** resultados ainda não documentados.

Após a execução do APK no dispositivo ou emulador, preencher a coluna de resultados obtidos com *Aprovado*, *Reprovado* ou *Não executado*, incluindo observações quando necessário.

Não foram atribuídos resultados de aprovação a testes que ainda não possuem evidência.

---

## 13. Evidências visuais

Esta seção reúne os registros visuais que deverão comprovar o funcionamento do aplicativo.

### Evidência 1 — Tela principal

**Inserir captura de tela da listagem de ocorrências e dos contadores.**

### Evidência 2 — Cadastro de ocorrência

**Inserir captura do formulário preenchido e da validação.**

### Evidência 3 — Simulador IoT

**Inserir captura do simulador apresentando uma leitura.**

### Evidência 4 — Alerta de risco alto

**Inserir captura do banner de alerta simulado.**

### Evidência 5 — Detalhes da ocorrência

**Inserir captura da tela de detalhamento.**

As imagens deverão ser adicionadas ao repositório e vinculadas nesta seção após a realização dos testes.

---

## 14. Plano de negócios

### 14.1 Resumo executivo

O GrassWatch propõe uma plataforma de apoio ao monitoramento da vegetação em rodovias, com potencial para integrar informações de campo e sensores IoT.

A solução é direcionada ao setor de concessões e manutenção rodoviária, buscando melhorar a organização das ocorrências e apoiar a priorização das atividades operacionais.

O protótipo atual demonstra o funcionamento básico do aplicativo e a simulação das medições.

### 14.2 Público-alvo e clientes

Os potenciais clientes são concessionárias de rodovias, operadores de infraestrutura e empresas de conservação rodoviária.

Os usuários operacionais seriam profissionais de campo e supervisores responsáveis pelo acompanhamento das ocorrências.

### 14.3 Proposta de valor

A plataforma busca oferecer:

- Registros centralizados.
- Classificação de situações de risco.
- Acompanhamento das intervenções.
- Histórico operacional.
- Possibilidade de integração futura com sensores.
- Apoio à tomada de decisão.

Esses benefícios são objetivos da solução e ainda precisam ser validados em uma implantação real.

### 14.4 Modelo de receita

O modelo proposto é **B2B SaaS (Business to Business — Software as a Service)**.

A comercialização poderia ocorrer por assinatura, considerando o porte da operação, o número de usuários e a extensão dos trechos monitorados.

Também poderiam existir receitas adicionais relacionadas à implantação, integração com sistemas existentes e suporte especializado.

### 14.5 Estrutura de custos

Os principais custos previstos para uma operação comercial seriam:

| Categoria | Exemplos |
|---|---|
| Desenvolvimento | Programação, manutenção e evolução |
| Infraestrutura | Servidores, banco de dados e armazenamento |
| IoT | Sensores, microcontroladores e instalação |
| Comunicação | Conectividade e transmissão |
| Operação | Monitoramento, suporte e treinamento |
| Segurança | Proteção de dados e controle de acesso |

### 14.6 Análise de mercado e concorrência

O GrassWatch se posicionaria no mercado de soluções para gestão de infraestrutura rodoviária e manutenção operacional.

As alternativas existentes podem incluir inspeções manuais, planilhas, sistemas internos de gestão e plataformas de manutenção.

O diferencial pretendido é combinar o registro mobile de ocorrências com dados de sensores IoT.

Para uma implantação comercial, seria necessário realizar uma pesquisa específica de fornecedores, funcionalidades, preços e contratos existentes no mercado.

### 14.7 Estratégia de implantação

A implantação poderia seguir quatro etapas:

**Etapa 1 — Projeto piloto:** selecionar um trecho limitado para avaliação.

**Etapa 2 — Integração técnica:** conectar sensores físicos e configurar a infraestrutura de dados.

**Etapa 3 — Validação operacional:** acompanhar precisão, estabilidade e utilidade dos registros.

**Etapa 4 — Expansão:** ampliar a cobertura após validação técnica e econômica.

### 14.8 Viabilidade financeira

A viabilidade dependeria da comparação entre os custos de desenvolvimento, infraestrutura, instalação e manutenção e os benefícios obtidos pela concessionária.

Os principais indicadores para avaliação seriam:

- Custo de implantação por trecho.
- Custo mensal de operação.
- Quantidade de ocorrências identificadas.
- Tempo médio de atendimento.
- Custo médio por intervenção.
- Redução de deslocamentos desnecessários, caso comprovada.
- Retorno sobre o investimento.

**Não foram definidos preços comerciais ou projeções financeiras numéricas**, pois ainda não existem dados validados de custos, escala de implantação ou disposição de pagamento dos clientes.

### 14.9 Riscos e mitigação

| Risco | Possível mitigação |
|---|---|
| Leituras incorretas | Calibração e validação de campo |
| Falhas de conectividade | Armazenamento temporário e sincronização |
| Danos aos sensores | Proteção física e manutenção preventiva |
| Custos elevados | Implantação piloto antes da expansão |
| Baixa adesão operacional | Treinamento e melhorias de usabilidade |
| Falhas de segurança | Autenticação, controle de acesso e proteção de dados |

### 14.10 Indicadores de desempenho

Em uma futura implantação, poderão ser acompanhados:

- Número de ocorrências por trecho.
- Distribuição por nível de risco.
- Tempo médio de resolução.
- Percentual de ocorrências resolvidas.
- Disponibilidade dos sensores.
- Taxa de leituras inválidas.
- Custo operacional por trecho.

---

## 15. Limitações do protótipo

A versão atual possui limitações importantes:

- As medições IoT são simuladas.
- Não existe comprovação de integração com sensores físicos.
- A análise automática de imagens por IA não está implementada.
- Não existe autenticação confirmada.
- Não há comprovação de sincronização com banco de dados remoto.
- Os benefícios operacionais ainda não foram medidos em rodovias reais.

Essas limitações são consideradas no planejamento das próximas evoluções.

---

## 16. Melhorias futuras

- Integração com ESP32 e HC-SR04 físicos.
- Backend e banco de dados centralizados.
- Firebase Realtime Database ou tecnologia equivalente.
- Autenticação e gerenciamento de usuários.
- Persistência offline.
- Geolocalização das ocorrências.
- Notificações automáticas.
- Dashboard web para supervisores.
- Visão computacional.
- Relatórios operacionais.
- Integração com sistemas corporativos de manutenção.

---

---

## 17. Entregáveis da Sprint 4

| Entregável | Situação / link |
|---|---|
| Código-fonte | [Repositório GitHub](https://github.com/Gerreiro/Sprint-03-Cross) |
| README consolidado Sprint 3 e 4 | Este documento |
| APK Android | [Download do GrassWatch](https://expo.dev/artifacts/eas/FSlRiZhJfxkxQN5JUomLba9zS1oTu67L4WLYbIKKIfg.apk) |
| Plano de negócios | Seção 14 |
| Matriz de testes | Seção 12 |
| Evidências visuais | Pendente de inclusão |
| Vídeo de apresentação | Pendente de link |
| Arquivo TXT com dados da equipe e links | Pendente de preparação |

---

## 18. Considerações finais

O GrassWatch apresenta uma proposta de aplicação de desenvolvimento mobile e Internet das Coisas para o monitoramento da vegetação rodoviária.

Na Sprint 3, foi desenvolvido o protótipo de gerenciamento de ocorrências, incluindo cadastro, classificação, listagem e acompanhamento.

Na Sprint 4, o projeto foi consolidado, recebeu ajustes de código, incorporou recursos de demonstração e captura de imagens e foi compilado para Android por meio do Expo EAS Build.

O resultado é uma base funcional para demonstrar o conceito e apoiar futuras evoluções envolvendo sensores físicos, armazenamento centralizado e integração com operações reais de conservação rodoviária.

---

**FIAP — Challenge Motiva | GrassWatch | Sprint 3 e Sprint 4**
