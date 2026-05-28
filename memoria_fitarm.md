# Memoria FitARM

Atualizado em: 2026-05-21

Atualizacao de UX em: 2026-05-28

## Objetivo do app

FitARM é uma aplicação de controle alimentar inteligente. O usuário informa o que tem para comer, como o alimento foi preparado e o app sugere quantas gramas consumir de cada item conforme meta calórica, objetivo, perfil clínico e impacto metabólico.

O app também acompanha ao longo do dia:

- calorias consumidas;
- calorias restantes;
- proteína;
- fibras;
- carga glicêmica;
- alertas para diabetes/controle glicêmico;
- alertas para hipertensão/sódio;
- sugestões diárias.

O app é educacional e não substitui nutricionista, médico ou orientação clínica individualizada.

## Fonte técnica usada

Arquivo técnico de referência no projeto:

- `Base_Cientifica_Controle_Alimentar (1).docx`

Principais bases citadas no documento e usadas como lógica inicial:

- TACO/UNICAMP: composição de alimentos brasileiros.
- TBCA/USP: composição de alimentos e preparações.
- USDA FoodData Central: composição alimentar complementar.
- SBD 2024/2025: terapia nutricional em diabetes e pré-diabetes.
- OMS/WHO: sódio e potássio.
- ISSN: proteína, hipertrofia, composição corporal e nutrient timing.
- International Tables of Glycemic Index and Glycemic Load Values 2021.
- Harvard Health / University of Sydney GI Database: índice glicêmico.

## Estado atual do projeto

Tipo atual:

- Web app estático.
- PWA instalável.
- Sem backend.
- Dados persistidos no `localStorage` do navegador.
- Interface reorganizada para priorizar o fluxo de nova refeicao.
- Cadastro de perfil/metas separado em area propria.
- Nova refeicao funciona como uma conversa guiada.
- Integracao opcional com Supabase Auth e Postgres foi preparada.
- Se o usuario nao estiver logado, o app continua funcionando localmente.

URL local de teste:

- `http://127.0.0.1:4173`
- `http://localhost:4173`

Arquivo principal:

- `index.html`

Arquivos criados/alterados:

- `index.html`: estrutura da interface.
- `styles.css`: layout responsivo e visual.
- `app.js`: base alimentar, cálculos, regras e interação.
- `manifest.webmanifest`: configuração PWA.
- `sw.js`: service worker e cache offline.
- `server.js`: servidor local simples para testar como PWA.
- `supabase_schema.sql`: tabelas e politicas RLS para Supabase.
- `icons/icon.svg`: ícone fonte.
- `icons/icon-192.png`: ícone PWA 192px.
- `icons/icon-512.png`: ícone PWA 512px.

Imagens de validação geradas:

- `fitarm-preview.png`
- `fitarm-mobile-preview.png`
- `test-desktop.png`
- `test-mobile.png`
- `pwa-mobile-test.png`
- `pwa-offline-test.png`

## Como rodar

Dentro de `D:\OneDrive\Apps\FitARM`, executar:

```powershell
& 'C:\Users\Anderson\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' server.js
```

Depois abrir:

```text
http://127.0.0.1:4173
```

Observação importante:

- Abrir via `file:///D:/OneDrive/Apps/FitARM/index.html` funciona para testar a tela.
- Para PWA, instalação e offline, precisa abrir por HTTP local ou HTTPS. Use `http://127.0.0.1:4173`.

## PWA

Implementado:

- `manifest.webmanifest`;
- `theme-color`;
- ícones 192 e 512;
- `display: standalone`;
- service worker;
- cache offline do app shell;
- botão "Instalar app" quando o navegador dispara `beforeinstallprompt`;
- status Online/Offline na interface.

Cache atual do service worker:

- `fitarm-pwa-v6`

Arquivos cacheados:

- `./`
- `./index.html`
- `./styles.css`
- `./app.js`
- `./manifest.webmanifest`
- `./icons/icon-192.png`
- `./icons/icon-512.png`

Validação já feita:

- manifest carregou;
- service worker registrou;
- cache foi criado;
- app abriu offline após cache;
- sem erros de console no teste automatizado.

## Lógica nutricional implementada

### Taxa basal e meta calórica

O app usa Harris-Benedict, conforme a base científica enviada.

Homem:

```text
TMB = 66 + (13,7 x kg) + (5 x cm) - (6,8 x idade)
```

Mulher:

```text
TMB = 655 + (9,6 x kg) + (1,8 x cm) - (4,7 x idade)
```

GET:

```text
GET = TMB x fator de atividade
```

Fatores:

- sedentário: 1,2;
- leve: 1,375;
- moderado: 1,55;
- muito ativo: 1,725;
- atleta: 1,9.

Estratégias calóricas disponíveis:

- déficit 10% da TMB;
- déficit 15% do GET;
- déficit 300 kcal;
- déficit 500 kcal;
- superávit 300 kcal;
- usar meta manual.

Padrão inicial:

- 5 refeições por dia.
- Estratégia inicial: déficit de 10% da TMB.

Nota conceitual:

- A ideia de 5 refeições é usada para organização, saciedade, distribuição de proteína e controle glicêmico.
- Não deve ser apresentada como promessa forte de "acelerar metabolismo".

### Proteína

Faixa atual:

- ganho de massa: 2,0 a 2,2 g/kg;
- perda de gordura: 1,6 a 2,2 g/kg;
- manutenção: 1,2 a 1,6 g/kg.

Exemplo validado:

- 80 kg em ganho de massa = 160 a 176 g/dia.

### Carga glicêmica

O app calcula por porção real:

```text
CG = (IG x carboidratos da porção) / 100
```

Classificação usada na lógica:

- CG elevada em refeição gera alerta.
- Para diabetes, CG acima de 30 é crítica.
- A base do app prioriza carga glicêmica em vez de olhar somente índice glicêmico.

### Preparo dos alimentos

Opções atuais:

- cozido/cru;
- grelhado/assado;
- frito;
- suco/batido;
- cozido e resfriado.

Efeitos atuais:

- frito aumenta kcal e IG;
- suco reduz fibra e aumenta impacto glicêmico;
- cozido e resfriado reduz IG por amido resistente;
- óleo, açúcar e sal adicionados entram no cálculo.

Conversões:

- óleo: 8,84 kcal/g;
- açúcar: 4 kcal/g e entra como carboidrato;
- sal: 393 mg de sódio por grama.

### Sugestão de porção

A sugestão usa:

- calorias restantes do dia;
- refeições restantes;
- objetivo;
- diabetes;
- grupo alimentar;
- densidade calórica;
- limites máximos por grupo.

Limites atuais por grupo sem diabetes:

- carboidrato: 260 g;
- leguminosa: 220 g;
- proteína: 240 g;
- verdura/legume: 300 g;
- fruta: 200 g;
- gordura: 25 g.

Limites atuais com diabetes:

- carboidrato: 150 g;
- leguminosa: 180 g;
- proteína: 220 g;
- verdura/legume: 300 g;
- fruta: 140 g;
- gordura: 20 g.

Correção feita:

- As gramas automáticas agora são recalculadas enquanto o usuário não editar manualmente.
- Antes havia um bug em que a sugestão visual podia mudar, mas o registro mantinha valores antigos.
- A sugestao de gramas agora aparece tambem dentro do card do alimento, antes do campo de gramas.

## UX atual

Mudancas implementadas em 2026-05-28:

- A area principal agora inicia em "Nova refeicao".
- O antigo bloco de peso, altura, idade e metas saiu do topo e foi para uma area "Cadastro".
- A area de cadastro fica pronta para no futuro virar onboarding do primeiro acesso quando houver login.
- Os cards de resumo do dia foram redesenhados e aparecem logo abaixo da montagem da refeicao.
- A inclusao de alimentos agora usa um fluxo parecido com troca de mensagens.
- O app pergunta o que tem na refeicao e o usuario responde no campo de texto.
- Se o usuario digitar algo generico, como "arroz", o app oferece opcoes como arroz branco, integral e parboilizado.
- Depois que o alimento e escolhido, o app abre um card com preparo, oleo, acucar, sal, gramas e sugestao inicial.
- A base tecnica foi compactada para um unico card expansivel.
- O card da base tecnica exibe um ponto tecnico por vez, variando conforme o dia.
- Ajuste de 2026-05-28: cards de resumo voltaram para o topo, em formato compacto, antes de Nova Refeicao.
- Ajuste de 2026-05-28: o campo de resposta nao usa mais datalist nativa ao focar; a escolha acontece pela conversa.
- Ajuste de 2026-05-28: botao Registrar refeicao foi movido para abaixo dos cards de preparo.
- Ajuste de 2026-05-28: cada alimento ganhou acoes Editar e Excluir.
- Ajuste de 2026-05-28: o painel separado de Sugestao Inteligente foi removido; a sugestao fica no card do alimento antes do preparo.
- Ajuste de 2026-05-28: Editar e Excluir foram movidos para o card do Diario / Insercoes de hoje.
- Ajuste de 2026-05-28: ao editar uma refeicao do Diario, ela volta para a area de montagem para ajuste e novo registro.
- Ajuste de 2026-05-28: sugestao inicial ficou maior, mostrando gramas, kcal e CG com mais destaque.
- Ajuste de 2026-05-28: fluxo de conversa tenta vibrar em navegadores compativeis usando `navigator.vibrate`.
- Ajuste de 2026-05-28: respostas do sistema na conversa aguardam 1 segundo para dar sensacao mais natural.
- Ajuste de 2026-05-28: quando o usuario escolhe uma opcao sugerida, essa escolha tambem aparece como mensagem do usuario.

## Alimentos na base inicial

Base inicial no `app.js`, constante `FOODS`.

Grupos:

- cereais/carboidratos;
- leguminosas;
- proteínas animais/laticínios;
- verduras e legumes;
- frutas;
- gorduras/óleos/castanhas.

Exemplos:

- arroz branco, integral e parboilizado;
- feijão carioca e preto;
- lentilha;
- grão-de-bico;
- frango;
- bife de coxão mole;
- patinho;
- tilápia;
- salmão;
- ovo;
- alface;
- brócolis;
- tomate;
- cenoura;
- maçã;
- banana;
- laranja;
- morango;
- manga;
- melancia;
- abacate;
- tâmara;
- passa de uva;
- azeite;
- manteiga;
- amendoim;
- castanha-do-pará.

## Diabetes e glicemia

Regras e mensagens atuais:

- fruta inteira é preferida ao suco;
- suco reduz fibra e aumenta impacto glicêmico;
- tapioca, pão francês, farinha e carboidratos de alto IG recebem alerta;
- frutas secas como tâmara e passa são marcadas como risco elevado;
- combinações com proteína, leguminosa e salada são sugeridas;
- arroz + feijão recebe insight positivo quando ambos aparecem na refeição.

Exemplo de mensagem:

- "Para diabetes, prefira carboidrato com leguminosa, proteína e salada. Fruta inteira é melhor que suco."

## Hipertensão e sódio

Regras atuais:

- o app soma sódio por alimento e sal adicionado;
- se hipertensão estiver marcada e sódio diário passar de 1600 mg, gera alerta;
- sódio alto por refeição gera badge.

Mensagem atual:

- evitar embutidos, queijos salgados, temperos prontos e conservas no restante do dia.

## Score metabólico

O score da refeição considera:

- calorias dentro da meta;
- proteína adequada;
- fibras;
- carga glicêmica;
- sódio;
- presença de verduras/legumes;
- fritura ou suco.

Escala atual:

- 0 a 12.

## Validações realizadas

### Sintaxe

Validado com:

```powershell
node --check app.js
node --check sw.js
node --check server.js
```

Resultado:

- sem erros.

### Fluxo testado: arroz + feijão + bife + alface

Alimentos:

- arroz;
- feijão;
- bife de gado;
- alface.

Resultado após correção:

- sugestão e campos de gramas ficaram alinhados;
- registro usou as mesmas porções exibidas.

### Fluxo testado: ganho de massa

Perfil:

- 80 kg;
- 175 cm;
- 35 anos;
- homem;
- atividade moderada.

Resultado:

- TMB: 1799 kcal;
- GET: 2788 kcal;
- superávit: +300 kcal;
- meta: 3090 kcal;
- proteína: 160 a 176 g.

### Fluxo testado: perda de gordura

Mesmo perfil acima.

Resultado:

- TMB: 1799 kcal;
- GET: 2788 kcal;
- déficit 10% TMB: -180 kcal;
- meta: 2610 kcal;
- proteína: 128 a 176 g.

### Fluxo testado: diabetes

Alimentos:

- tapioca;
- laranja em modo suco;
- ovo.

Resultado:

- alertas de alto impacto glicêmico;
- alerta de atenção diabetes;
- sugestão reduzida para carboidratos/frutas.

### PWA/offline

Resultado:

- `manifest.webmanifest` encontrado;
- `theme-color` encontrado;
- service worker pronto;
- cache criado no service worker;
- app recarregou offline;
- status mudou para "Offline".

## Decisões de produto

1. Começar como web/PWA antes de Android nativo.
2. Validar cálculos e experiência antes de APK/AAB.
3. Manter tudo local por enquanto, sem login e sem backend.
4. Usar a base científica apresentada como fonte principal.
5. Não apresentar o app como prescrição médica.
6. Priorizar carga glicêmica por porção real, não apenas IG.
7. Manter 5 refeições como padrão inicial.
8. Usar proteína mais alta para hipertrofia, 2,0 a 2,2 g/kg.
9. Supabase sera usado como backend do MVP, com fallback local.
10. A publishable key do Supabase fica no frontend; seguranca depende de RLS.

## Supabase MVP

Projeto informado:

- URL base: `https://ruufjzigcimqlmknscbm.supabase.co`
- Chave publica: `sb_publishable_...`

Arquitetura:

- Supabase Auth para login/cadastro.
- `profiles` para perfil, metas e condicoes clinicas.
- `meals` para refeicoes registradas.
- `meal_items` para itens de cada refeicao.
- RLS por `auth.uid()` em todas as tabelas.

O app:

- mostra painel "Conta / Sincronizacao Supabase";
- permite criar conta, entrar e sair;
- salva perfil no Supabase ao calcular meta;
- salva refeicoes no Supabase ao registrar;
- carrega refeicoes do dia quando o usuario entra;
- continua usando localStorage quando offline/sem login.

## Próximos passos sugeridos

1. Testar manualmente no navegador por alguns dias.
2. Melhorar cadastro de alimento personalizado.
3. Adicionar histórico semanal.
4. Adicionar exportação CSV/JSON do diário.
5. Separar a base alimentar em `foods.json`.
6. Criar tela de onboarding do perfil.
7. Adicionar metas de carboidrato, gordura e fibra.
8. Adicionar refeições nomeadas: café, almoço, lanche, jantar, ceia.
9. Criar modo PWA em celular via rede local.
10. Empacotar com Capacitor para Android.

## Caminho para Android depois do PWA

Etapas prováveis:

1. Inicializar projeto npm.
2. Instalar Capacitor.
3. Configurar `webDir`.
4. Adicionar plataforma Android.
5. Gerar APK debug.
6. Testar em celular.
7. Gerar AAB para Play Store.

Comandos futuros prováveis:

```powershell
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init FitARM br.com.fitarm.app
npx cap add android
npx cap sync android
npx cap open android
```

Ainda não executar publicação Android antes de validar o PWA.

## Observações técnicas

- O projeto ainda não é um repositório Git.
- Não há `package.json` ainda.
- O servidor local atual é propositalmente simples.
- `localStorage` salva:
  - `fitarm-profile`;
  - `fitarm-log-YYYY-MM-DD`.
- O app funciona offline depois que o service worker cacheia os arquivos.
- PWA precisa de HTTP local/HTTPS; `file://` não registra service worker.

## Modularizacao inicial

Criado em 2026-05-28:

- Projeto ja esta em Git/GitHub: `AndersonMoro/fitarm`.
- `modules/config.js`: URL/chave publica do Supabase e versao de cache PWA.
- `modules/utils.js`: funcoes compartilhadas de data, normalizacao e arredondamento.
- `modules/science.js`: cards tecnicos exibidos de forma rotativa.
- `app.js` virou ES module e importa os modulos acima.
- `index.html` passou a carregar `app.js` com `type="module"`.
- `sw.js` cacheia os arquivos de modulo na versao `fitarm-pwa-v7`.
- Interface ganhou navegacao por areas: Refeicao, Diario, Cadastro e Base tecnica.
