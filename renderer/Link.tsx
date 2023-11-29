import React from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { usePageContext } from "./usePageContext"

// function Link({ href, children }: { href: string; children: React.ReactNode }) {
// const pageContext = usePageContext();
// const { urlPathname } = pageContext;
// const isActive =
// href === "/" ? urlPathname === href : urlPathname.startsWith(href);
//   return (
//     <a href={href} className={isActive ? "is-active" : undefined}>
//       {children}
//     </a>
//   );
// }

function Link(props: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  const { urlPathname } = usePageContext()

  const isActive =
    props.href === "/"
      ? urlPathname === props.href
      : urlPathname.startsWith(props.href)

  const className = [props.className].filter(Boolean).join(" ")

  return (
    <Button
      asChild={!isActive}
      variant={isActive ? "outline" : "link"}
      disabled
      className={cn(!isActive ? "border border-transparent" : "")}
    >
      {isActive ? (
        props.children
      ) : (
        <a href={props.href} className={className}>
          {props.children}
        </a>
      )}
    </Button>
  )
}

export default Link
