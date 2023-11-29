import React, { useState } from "react"

import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react"
import Icon, { IconType } from "~/components/icon"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"
import Link from "~/renderer/Link"

export const SidebarBTN = ({
  icon,
  label,
  sidebarOpen,
  onClick,
  active = false,
}: {
  icon: IconType
  label: string
  sidebarOpen: boolean
  onClick?: () => void
  active?: boolean
}) => {
  const [hovered, sethovered] = useState(false)

  const IconElement = <Icon name={icon} className={"w-5 h-5"} />
  return (
    <TooltipProvider>
      <Tooltip
        open={hovered}
        onOpenChange={(e) => {
          sethovered(!sidebarOpen ? e : false)
        }}
        delayDuration={75}
      >
        <TooltipTrigger asChild>
          <Button
            variant={active ? "secondary" : "ghost"}
            size={sidebarOpen ? "default" : "icon"}
            className={cn("w-full")}
            onClick={onClick}
          >
            <div className="min-w-9 w-9 h-9 flex items-center justify-center">
              <Icon name={icon} className={"w-5 h-5"} />
            </div>

            {sidebarOpen ? (
              <span
                className={cn(
                  "overflow-hidden whitespace-nowrap text-start",
                  "w-full h-auto opacity-100 pl-3",
                  !sidebarOpen ? "w-0 h-0 opacity-0 invisible" : ""
                )}
              >
                {label}
              </span>
            ) : (
              <></>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const SidebarGroup = ({
  title,
  sidebarOpen,
  children,
}: {
  title: string
  sidebarOpen: boolean
  children?: React.ReactElement[] | React.ReactElement
}) => {
  return (
    <div
      className={cn(
        "transition-all ease-linear duration-75 opacity-100 w-full flex flex-col px-3",
        "reative overflow-hidden my-1",
        !sidebarOpen ? "py-0" : ""
      )}
    >
      <div
        className={cn(
          "transition-all ease-linear duration-75 opacity-100 z-0 overflow-hidden",
          "absolute",
          !sidebarOpen ? "opacity-0 h-0" : ""
        )}
      >
        <h4
          className={cn(
            "transition-opacity ease-linear duration-[50ms]",
            "text-lg font-bold tracking-tight",
            "w-full text-clip whitespace-nowrap overflow-hidden opacity-100"
          )}
        >
          {title}
        </h4>
      </div>
      <div
        className={cn(
          "transition-all ease-linear duration-75 bg-background z-10 mt-7",
          !sidebarOpen ? "mt-0" : ""
        )}
      >
        {children}
      </div>
    </div>
  )
}

const Sidebar = ({
  children,
}: {
  children?: React.ReactElement[] | React.ReactElement
}) => {
  const [sidebarOpen, setsidebarOpen] = useState(false)

  return (
    <aside
      className={cn(
        "w-[250px] transition-all duration-75 ease-linear border-r h-full flex flex-col justify-start bg-background ",
        sidebarOpen ? "w-[250px]" : "w-[60px]"
      )}
    >
      <header
        className={cn("h-[55px] flex flex-row items-center justify-start")}
      >
        <div
          className={cn(
            "mx-2 transition-all ease-linear duration-75 flex items-center justify-center min-w-[59px] min-h-[55px]",
            !sidebarOpen ? "mx-0" : "mx-2"
          )}
        >
          <a href="/">
            <img
              src="/static/Icons/android-chrome-512x512.png"
              alt="Isca Logo"
              className={cn(
                "transition-all ease-linear duration-75 w-[55px]",
                sidebarOpen ? "w-[55px]" : "w-[45px]"
              )}
            />
          </a>
        </div>

        <h3
          className={cn(
            "w-full opacity-100 transition-all ease-linear duration-75 overflow-hidden text-clip whitespace-nowrap text-lg font-bold tracking-tight",
            !sidebarOpen ? "w-0" : ""
          )}
        >
          Base Dashboard
        </h3>
      </header>

      <nav className={cn("pb-12 overflow-hidden flex-1")}>
        <div className="py-4">
          <SidebarGroup title="Navigation" sidebarOpen={sidebarOpen}>
            <SidebarBTN
              icon={"Home"}
              label={"Home"}
              active
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"LibraryBig"}
              label={"Journals"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"Mail"}
              label={"Contact"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"User2"}
              label={"Account Information"}
              sidebarOpen={sidebarOpen}
            />
          </SidebarGroup>

          <SidebarGroup title="Author Tools" sidebarOpen={sidebarOpen}>
            <SidebarBTN
              icon={"LayoutDashboard"}
              label={"Dashboard"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"FilePlus"}
              label={"Submit Paper"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"CreditCard"}
              label={"Make Payment"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"FileCheck"}
              label={"Status of Papers"}
              sidebarOpen={sidebarOpen}
            />
          </SidebarGroup>

          <SidebarGroup title="Admin Tools" sidebarOpen={sidebarOpen}>
            <SidebarBTN
              icon={"UserCog"}
              label={"User Management"}
              sidebarOpen={sidebarOpen}
            />
            <SidebarBTN
              icon={"FilePlus"}
              label={"Role Settings"}
              sidebarOpen={sidebarOpen}
            />
          </SidebarGroup>
        </div>
      </nav>

      <div className="p-3 flex flex-row justify-end">
        <TooltipProvider>
          <Tooltip delayDuration={75}>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setsidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{sidebarOpen ? "Close Sidebar" : "Open Sidebar"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  )
}

export default Sidebar
