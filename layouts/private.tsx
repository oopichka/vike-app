// import ISCA_Logo from "@/../static/ISCA-LightMode.svg"

import { Bell, LayoutDashboard, LogOut, User, UserCircle2 } from "lucide-react"

import { Avatar, AvatarFallback } from "~/components/ui/avatar"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import React from "react"
import { SearchInput } from "~/components/search_input"

import Navbar from "~/components/layout/navbar"
import Sidebar from "~/components/layout/sidebar"
import Link from "~/renderer/Link"
import { usePageContext } from "~/renderer/usePageContext"

/**
 * DefualtLayout
 * ---------------------------------------------------------
 * @param {React.ReactNode | React.ReactNode[]} children Child components to be rendered.
 * ---------------------------------------------------------
 * - Navbar star-wars
 * ---------------------------------------------------------
 * @returns Page Layout Wrapper.
 */
const PrivateLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const context = usePageContext()

  // console.log(context);
  return (
    <main className="h-screen w-screen flex flex-row items-center bg-background overflow-hidden">
      <Sidebar />
      <article className="flex-1 flex-col h-full relative overflow-auto">
        <Navbar isPrivateView />
        <section className="p-6">{children}</section>
      </article>
    </main>
  )
}

export default PrivateLayout
