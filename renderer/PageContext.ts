import React from "react"

type PageProps = Record<string, unknown>
type Page = (pageProps: PageProps) => React.ReactElement

declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      config: {
        /** Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string
      }
      /** Title defined dynamically by onBeforeRender() */
      title?: string
      abortReason?: string
      someAsyncProps?: number
    }
  }
}
