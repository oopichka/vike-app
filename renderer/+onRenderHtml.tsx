/* eslint-disable @typescript-eslint/ban-ts-comment */
// https://vike.dev/onRenderHtml
export { onRenderHtml };

import React from "react";
// @ts-ignore
import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vike/server";
import type { OnRenderHtmlAsync } from "vike/types";
import { PageShell } from "./PageShell";
import { getPageTitle } from "./getPageTitle";

const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
};
