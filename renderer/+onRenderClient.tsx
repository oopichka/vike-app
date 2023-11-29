// https://vike.dev/onRenderClient
import React from "react"
import ReactDOM from "react-dom/client"
import type { OnRenderClientAsync } from "vike/types"
import PageShell from "./PageShell"
import "./css/index.css"
import getPageTitle from "./getPageTitle"

let root: ReactDOM.Root
const onRenderClient: OnRenderClientAsync = async (
  pageContext
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  const container = document.getElementById("page-view")!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
  document.title = getPageTitle(pageContext)
}

export default onRenderClient
