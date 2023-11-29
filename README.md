<h1 align="center">Assignment 3 Prototyping to Mitigate Risks</h1>
<p align="center"><strong>Created by</strong>
<br>Owen Opichka</p>

<h2>About</h2>
As one of the main goals of the project is to have a website where journals are hosted to be indexed by research databases, and search engines, the site needs to have proper Search Engine Optimization (SEO). The main way to mitigate the risk of poor SEO is to implement some sort of server-side rendering (SSR). Other enhancements to SEO that can be made is allowing web crawlers to crawl the site and including proper metadata.

<h2>Installation and Running</h2>

1. Download this project
2. In the root of the project run the following command to install the depencencies:
   ```npm
   npm install
   ```
3. To run in development mode (SSR is not garenteed to work in development):
   ```npm
   npm run dev
   ```
4. To run in production mode (SSR is garenteed to work in production, this will build the project and then serve it):
   ```npm
   npm run serve
   ```

<h2>Notable Development tools and Technologies used.</h2>

- [TypeScript](https://github.com/microsoft/TypeScript) TypeScript adds <b>optional types</b> to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
- [Zod](https://github.com/colinhacks/zod): Powerful TypeScript-first schema validation with static type inference
- [prettier](https://github.com/prettier/prettier) Opinionated Code Formatter for JavaScript, TypeScript, Flow, JSX, JSON, CSS, SCSS, Less, HTML, Vue, Angular, GraphQL, Markdown, YAML.
- [react.js](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [express.js](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework for Node.js.
- [vite.js](https://github.com/vitejs/vite): Vite is a frontend build tool that consists of two major parts:

  1. A dev server with [Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement)
  2. A build command that bundles your code with [Rollup](https://github.com/rollup/rollup).

- [shadcn/ui](https://github.com/shadcn-ui/ui) Re-usable components built using Radix UI and Tailwind CSS.
  - [tailwindcss](https://github.com/tailwindlabs/tailwindcss) A utility-first CSS framework for rapidly building custom user interfaces.
  - [radix-ui](https://github.com/radix-ui/themes) An open source component library optimized for fast development, easy maintenance, and accessibility.
