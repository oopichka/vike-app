import React from "react";
import { default as DefualtLayout, default as Layout } from "~/layouts/defualt";
import Sidebar from "~/layouts/sidebar";
import "~/styles/PageShell.css";
import "~/styles/shadcn.css";
import { Link } from "./Link";
import type { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <DefualtLayout>{children}</DefualtLayout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
