export default Page;

import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { usePageContext } from "~/renderer/usePageContext";

// import { PageProps, homeProps } f

function Page() {
  return (
    <>
      <section></section>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Home
              </div>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
                Item
              </div>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
}
