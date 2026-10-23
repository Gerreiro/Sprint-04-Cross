# GrassWatch — Plano de negócio | Challenge Motiva | Sprint 4

## 1. Problema e proposta de valor
O crescimento da vegetação nas faixas de domínio e proximidades de trechos rodoviários pode demandar inspeções, priorização de manutenção e rastreabilidade de ocorrências. O GrassWatch propõe registrar pontos de atenção, classificá-los por risco e acompanhar seu tratamento em um aplicativo móvel. A visão de longo prazo inclui sensores e análise de imagens; **a versão acadêmica atual usa dados simulados e não é ferramenta de segurança operacional certificada**.

## 2. Personas e clientes
- **Coordenador de conservação da concessionária:** precisa priorizar inspeções e intervenções por trecho e risco.
- **Inspetor de campo:** registra ocorrências com local, distância informada, foto e descrição.
- **Gestor de contratos/operações:** acompanha indicadores e tempo de resolução.
- **Cliente institucional:** Motiva e outras concessionárias rodoviárias; contratação B2B, não direcionada ao motorista individual.

## 3. Produto e implantação
**Fase piloto:** aplicativo de registro e acompanhamento, uso local em Android, simulação didática dos sensores. **Fase de validação:** backend centralizado, perfis de acesso, auditoria, conectividade offline/online, testes com equipes e dados reais autorizados. **Fase de expansão:** sensores homologados, telemetria, manutenção e integração aos sistemas da concessionária.

## 4. Modelo de receita proposto
Licença SaaS B2B por concessão/área operacional, mais implantação e suporte. Modelo alternativo: contrato de serviço gerenciado com acompanhamento mensal. Nenhum valor abaixo representa orçamento oficial da Motiva.

## 5. Estimativa de custos — cenário hipotético de piloto
| Item | Estimativa mensal (R$) | Premissa |
|---|---:|---|
| Hospedagem, API e banco de dados | 350 | Ambiente de piloto com uso moderado |
| Armazenamento de fotos e backups | 150 | Volume inicial limitado |
| Monitoramento e notificações | 100 | Serviço básico |
| Suporte técnico e manutenção | 2.500 | Aproximadamente 20 h/mês a R$ 125/h |
| **Total operacional estimado** | **3.100** | Exclui impostos, implantação, sensores e mão de obra de campo |

**Exemplo de precificação para estudo:** implantação de R$ 12.000 e assinatura de R$ 5.000/mês por unidade piloto. Margem operacional bruta ilustrativa: R$ 1.900/mês antes de impostos, vendas, desenvolvimento adicional e outros custos. É apenas uma hipótese comercial que precisaria ser validada com cotações e entrevistas.

## 6. Diferenciais
- Fluxo de cadastro, triagem, acompanhamento e conclusão em um mesmo aplicativo.
- Registro fotográfico e histórico local.
- Demonstração de regras de risco compreensíveis, com possibilidade futura de parametrização.
- Foco em manutenção de vegetação no contexto de concessões rodoviárias.

## 7. Riscos e mitigação
| Risco | Mitigação proposta |
|---|---|
| Leituras incorretas ou alarmes falsos | Validação humana, calibração e testes em campo antes do uso real |
| Ausência de conectividade | Armazenamento offline e sincronização futura |
| Perda ou exposição de dados | Autenticação, criptografia, backup e política de retenção na fase produtiva |
| Custos superiores ao previsto | Piloto limitado, medição de consumo e revisão de preço |
| Dependência de sensores físicos | Operação manual e indicação clara do estado da integração |
| Requisitos de segurança rodoviária | Homologação e avaliação técnica com a concessionária antes de decisões operacionais |

## 8. Indicadores e impacto esperado
Medir tempo médio entre registro e tratamento, proporção de ocorrências concluídas, volume por nível de risco, qualidade dos registros e tempo gasto na consolidação de relatórios. **Benefícios esperados**, ainda não comprovados: maior rastreabilidade, melhor priorização e menos trabalho administrativo. O piloto deve estabelecer uma linha de base e medir os resultados.

## 9. Próximos passos
Validar o problema com a Motiva, definir critérios técnicos de risco, executar testes em Android, construir backend seguro e realizar piloto controlado com dados reais autorizados. Não prometer redução de acidentes ou ganhos financeiros sem evidência.
