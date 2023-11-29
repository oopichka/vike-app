import React from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className=" bg-gray-400 text-accent px-40 pb-b flex flex-col">
      <div className="flex flex-row justify-between items-center py-1">
        <img
          src="/static/Icons/android-chrome-512x512.png"
          alt="Isca Logo"
          className={cn("w-[75px]")}
        />
        <div className="flex flex-row gap-5">
          <ul className="flex flex-row gap-0 items-end">
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">Editorial Board</a>
              </Button>
            </li>
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">Copyright</a>
              </Button>
            </li>
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">Indexing</a>
              </Button>
            </li>
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">IJCA Template</a>
              </Button>
            </li>
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">Submission</a>
              </Button>
            </li>
            <li>
              <Button variant={"link"} className="text-accent py-0" asChild>
                <a href="">To Order</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-0.5" />
      <div className="flex flex-col items-center gap-1 py-5">
        <p className="text-sm font-medium leading-none">
          ISCA, 278 Mankato Ave. #220, Winona, MN 55987, USA
        </p>
        <p className="text-sm font-medium leading-none">
          Copyright © 2023 International Society for Computers and Their
          Applications (ISCA). All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
