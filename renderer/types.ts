export type {
  PageContextWithServerRouting as PageContext,
  //*/
  /*
  // When using Client Routing https://vike.dev/clientRouting
  PageContextClient,
  PageContext,
  /*/
  // When using Server Routing
  PageContextClientWithServerRouting as PageContextClient,
  PageContextServer,
} from "vike/types";
export type { PageProps };

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page;
      pageProps?: PageProps;
      urlPathname: string;
      exports: {
        documentProps?: {
          title?: string;
          description?: string;
        };
      };
    }
  }
}

interface pageProps {
  location: string;
  title: string;
  desc: string;
  data?: object;
}

export interface homeProps extends pageProps {
  location: "/";
  title: "Home";
  data: {
    homeInfo1: string;
  };
}

export interface issuesProps extends pageProps {
  location: "/issues";
  title: "Issues";
}

type Page = ({ pageProps }: { pageProps?: PageProps }) => React.ReactElement;

type PageProps = (issuesProps | homeProps | pageProps) | undefined;
