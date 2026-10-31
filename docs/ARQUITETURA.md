# KE TV Football Manager — Arquitetura

Stack: TanStack Start (React 19) + Vite + Tailwind v4. Pronto para PostgreSQL/Supabase.

## Pastas

| Pasta | Responsabilidade |
|---|---|
| `src/routes/` | Páginas (uma por item do menu). `campeonatos.$divisao.tsx` atende Séries A–D. |
| `src/components/layout/` | Moldura do app, menu (`navigation.ts`), cabeçalhos e estados vazios. |
| `src/components/ui/` | Componentes base (shadcn). |
| `src/modules/competitions/` | Divisões, temporadas, formatos/regulamentos. |
| `src/modules/promotion/` | Acesso e rebaixamento (funções puras + testes). |
| `src/modules/clubs`, `players`, `matches`, `standings`, `transfers`, `careers`, `auth` | A criar: cada módulo terá `types.ts`, `api.ts` (consultas) e componentes próprios. |
| `database/schema.sql` | Esquema planejado com relações, grants e RLS. |

## Regras

- Nenhum dado fictício apresentado como real. Telas sem dados mostram `DataPending`.
- Dados reais devem guardar `source_url` e, para imagens, licença (`*_license`).
- Formatos de competição ficam `formatStatus: "pending"` até conferidos no regulamento oficial da CBF.
- Carreiras ficam no banco (RLS por usuário), nunca só no navegador.
- Nenhuma chave secreta no código; use variáveis de ambiente.

## Próximos passos (via GitHub)

1. Habilitar o banco na nuvem e aplicar `database/schema.sql` como migração.
2. Autenticação (login) e módulo `careers` (criar técnico, escolher clube).
3. Importadores de dados reais (clubes, elencos, estádios) com fonte registrada.
4. Motor de partidas, classificação e regras de cada temporada em `seasons.regulation`.

## Comandos

`bun install` · `bun run dev` · `bunx vitest run`
