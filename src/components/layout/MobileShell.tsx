import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function MobileShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido-principal" className="flex-1 pb-28 lg:pb-0">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
