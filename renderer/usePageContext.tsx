/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react"
import type { PageContext } from "vike/types"

const Context = React.createContext<PageContext>(undefined as any)

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}

export { PageContextProvider, usePageContext }
