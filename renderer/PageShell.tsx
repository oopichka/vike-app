import React from "react";
import type { PageContext } from "vike/types";
import DefualtLayout from "~/layouts/defualt";
import "~/styles/PageShell.css";
import "~/styles/shadcn.css";
import { Link } from "./Link";
import logoUrl from "./logo.svg";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <DefualtLayout>{children}</DefualtLayout>
      </PageContextProvider>
    </React.StrictMode>
  );
}
