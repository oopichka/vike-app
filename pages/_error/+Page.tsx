import React from "react"
import { usePageContext } from "~/renderer/usePageContext"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default Page

function Page() {
  const ctx = usePageContext()
  const { is404 } = ctx
  let { abortReason } = ctx
  if (!abortReason) {
    abortReason = is404 ? "Page not found." : "Something went wrong."
  }
  return (
    <Center>
      <p style={{ fontSize: "1.3em" }}>{abortReason}</p>
    </Center>
  )
}

function Center({ style, ...props }: any) {
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      {...props}
    ></div>
  )
}
