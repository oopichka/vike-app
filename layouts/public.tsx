import { Bell, LayoutDashboard, LogOut, User, UserCircle2 } from "lucide-react"

import { Avatar, AvatarFallback } from "~/components/ui/avatar"

import { Button } from "~/components/ui/button"

import React from "react"
import Footer from "~/components/layout/footer"

import Navbar from "~/components/layout/navbar"
import { SearchInput } from "~/components/search_input"
import { Separator } from "~/components/ui/separator"
import { cn } from "~/lib/utils"
import Link from "~/renderer/Link"
import { usePageContext } from "~/renderer/usePageContext"
/*
 * DefualtLayout
 * ---------------------------------------------------------
 * @param {React.ReactNode | React.ReactNode[]} children Child components to be rendered.
 * ---------------------------------------------------------
 * - Navbar star-wars
 * ---------------------------------------------------------
 * @returns Page Layout Wrapper.
 */
const PublicLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const context = usePageContext()

  // console.log(context);
  return (
    <main className="h-screen w-screen flex flex-row items-center bg-background overflow-hidden">
      <article className="flex-1 flex flex-col h-full relative overflow-auto">
        <Navbar isPrivateView={false} />
        <section className="p-6 flex-1">{children}</section>
        <Footer />
      </article>
    </main>
  )
}

export default PublicLayout
