import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { useCommandCenter } from "lib/components/commands/hook";

const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));
const TabBar = dynamic(() => import("./TabBar"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  useCommandCenter();

  return (
    <div className="min-h-[100vh] pb-[160px] sm:pb-16 pt-24 transition ease-out delay-[0.4s] bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex flex-col items-center relative z-[1] gap-8">
        <main className="layout-block">{children}</main>
        <Footer />
      </div>
      <TabBar />
    </div>
  );
};

export default Layout;
