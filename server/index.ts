// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.github.io/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

import compression from "compression"
import express from "express"
import { renderPage } from "vike/server"
import { root } from "./root.js"
import routes from "./routes/index.js"
const isProduction = process.env.NODE_ENV === "production"

startServer()

async function startServer() {
  const app = express()

  app.use("/api", routes)

  app.use(compression())

  // Vite integration
  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    const sirv = (await import("sirv")).default
    app.use(sirv(`${root}/dist/client`))
  } else {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const vite = await import("vite")
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  app.get("*", async (req, res, next) => {
    const pageContextInit = { urlOriginal: req.originalUrl }
    const pageContext = await renderPage(pageContextInit)
    if (pageContext.httpResponse === null) return next()

    const { getBody, statusCode, headers } = pageContext.httpResponse

    headers.forEach(([name, value]) => res.setHeader(name, value))

    pageContext.httpResponse.pipe(res)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
