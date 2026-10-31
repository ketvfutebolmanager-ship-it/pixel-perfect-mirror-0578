<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Read `docs/ARQUITETURA.md` before changing structure; domain logic lives in `src/modules/<domain>/`, pages in `src/routes/` — keeps modules independently maintainable.
- Main menu is defined only in `src/components/layout/navigation.ts`; every entry must point to an existing route.
- Pages without real data render `DataPending`; never ship fictional data presented as real.
- Planned DB schema lives in `database/schema.sql` until the cloud database is enabled, then becomes migrations.
- When appending player entries to `src/modules/players/database.ts`, always end the previous entry with a comma and run a production build before finishing — missing commas between club blocks have repeatedly broken the build.
