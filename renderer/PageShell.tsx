import React from "react"
import type { PageContext } from "vike/types"
import PrivateLayout from "~/layouts/private"
import PublicLayout from "~/layouts/public"
import "~/styles/PageShell.css"
import "~/styles/shadcn.css"
import Link from "./Link"
import logoUrl from "./static/ISCA-LightMode.svg"
import { PageContextProvider } from "./usePageContext"

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <PrivateLayout>{children}</PrivateLayout>
        {/* <PublicLayout>{children}</PublicLayout> */}
      </PageContextProvider>
    </React.StrictMode>
  )
}

export default PageShell
