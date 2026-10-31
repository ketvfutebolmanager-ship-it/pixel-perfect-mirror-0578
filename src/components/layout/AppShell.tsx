import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NAV_GROUPS } from "./navigation";

/** App frame: fixed sidebar menu + content area. */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 overflow-y-auto border-r border-sidebar-border bg-sidebar md:block">
        <Link to="/" className="flex items-center gap-2 border-b border-sidebar-border px-5 py-5">
          <span className="rounded-sm bg-primary px-1.5 py-0.5 font-display text-lg font-bold text-primary-foreground">
            KE TV
          </span>
          <span className="font-display text-lg font-semibold uppercase leading-none text-foreground">
            Football
            <br />
            Manager
          </span>
        </Link>
        <nav className="space-y-5 px-3 py-5">
          {NAV_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {g.title}
              </p>
              {g.items.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  params={item.params as never}
                  activeOptions={{ exact: true }}
                  className="block rounded-sm px-2 py-1.5 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
                  activeProps={{ className: "bg-sidebar-accent text-primary font-semibold" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <MobileNav />
        <main className="flex-1 px-5 py-8 md:px-10">{children}</main>
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-sidebar-border bg-sidebar px-3 py-2 md:hidden">
      {NAV_GROUPS.flatMap((g) => g.items).map((item) => (
        <Link
          key={item.label}
          to={item.to}
          params={item.params as never}
          activeOptions={{ exact: true }}
          className="whitespace-nowrap rounded-sm px-2 py-1 text-xs text-sidebar-foreground"
          activeProps={{ className: "bg-sidebar-accent text-primary" }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function PageHeader({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-8 border-b border-border pb-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{kicker}</p>
      <h1 className="mt-1 text-4xl font-bold uppercase text-foreground">{title}</h1>
      {children && <div className="mt-2 max-w-2xl text-muted-foreground">{children}</div>}
    </header>
  );
}

/** Honest empty state: shown wherever real data has not been imported yet. */
export function DataPending({ title, module }: { title: string; module: string }) {
  return (
    <div className="rounded-md border border-dashed border-border bg-card p-8">
      <p className="font-display text-xl font-semibold uppercase text-foreground">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Nenhum dado oficial foi importado ainda. Este painel será preenchido quando o módulo{" "}
        <code className="rounded-sm bg-muted px-1 text-primary">{module}</code> receber dados reais
        verificados.
      </p>
    </div>
  );
}
