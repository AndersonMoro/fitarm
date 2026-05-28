# FitARM

Aplicacao web/PWA de controle alimentar inteligente com metas caloricas, preparo dos alimentos, carga glicemica, alertas metabolicos e sugestoes de porcao.

## Rodar localmente

```powershell
& 'C:\Users\Anderson\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' server.js
```

Abrir no computador:

```text
http://localhost:4173
```

Abrir no celular na mesma rede Wi-Fi:

```text
http://IP-DA-MAQUINA:4173
```

No ambiente atual, o IP encontrado foi:

```text
http://10.10.10.41:4173
```

Se o celular nao abrir, verificar:

- computador e celular na mesma rede;
- VPN desativada;
- firewall do Windows permitindo conexoes para Node.js na porta 4173;
- rede Wi-Fi sem isolamento de clientes.

## Publicar no GitHub Pages

O projeto ja esta preparado para GitHub Pages porque usa caminhos relativos:

- `./index.html`
- `./styles.css`
- `./app.js`
- `./manifest.webmanifest`
- `./sw.js`
- `./icons/...`

Passos:

1. Criar um repositorio no GitHub, por exemplo `fitarm`.
2. Enviar estes arquivos para a branch `main`.
3. No GitHub, abrir `Settings > Pages`.
4. Em `Build and deployment`, escolher `Deploy from a branch`.
5. Selecionar branch `main` e pasta `/root`.
6. Salvar.

URL esperada:

```text
https://SEU_USUARIO.github.io/fitarm/
```

## Observacao PWA

PWA exige HTTPS ou localhost. GitHub Pages usa HTTPS, entao e adequado para testar instalacao no Android.

## Supabase

O app tem integracao opcional com Supabase Auth e Postgres.

Arquivos:

- `supabase_schema.sql`: tabelas e politicas RLS para executar no SQL Editor.
- `app.js`: usa `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY`.

Antes de testar login/sync:

1. Abrir Supabase > SQL Editor.
2. Executar `supabase_schema.sql`.
3. Conferir se Auth por e-mail/senha esta habilitado.
4. Abrir o app e criar conta/entrar.

O app continua funcionando localmente via `localStorage` se o Supabase estiver indisponivel.
