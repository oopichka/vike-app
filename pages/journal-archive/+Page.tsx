import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

export default Page

// import { PageProps, homeProps } f
const pastVolumes = [
  { title: "Dummy issue", link: "issue-list" },
  { title: "Dummy issue #2", link: "" },
  { title: "Dummy issue #3", link: "" },
]
const pastYears = [
  { Card, CardContent: "2022" },
  { Card, CardContent: "2021" },
  { Card, CardContent: "2020" },
  { Card, CardContent: "2019" },
]

function Page() {
  // const { name, location, setName } = useAppContext()
  const [count, setCount] = useState(0)

  return (
    <>
      <section></section>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Archive of All Journals
              </h1>
            </CardTitle>
            <CardDescription>Select a volume to view journal</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
                2023
              </h2>
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              {pastVolumes.map((e, i) => {
                return (
                  <p
                    className="md:text-right font-medium text-blue-600  hover:no-underline"
                    key={`${i}`}
                  >
                    {" "}
                    <a key={`pastVolumes-${i}`} href={e.link}>
                      {" "}
                      {e.title}{" "}
                    </a>
                  </p>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <section></section>
          {pastYears.map((x, y) => {
            return (
              <Card className="flex flex-col gap-6" key={`card-${y}`}>
                <CardHeader>
                  <CardTitle>
                    {
                      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">{`${x.CardContent}`}</h2>
                    }
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    {pastVolumes.map((e, i) => {
                      return (
                        <p
                          className="md: text-right font-medium text-blue-600  hover: no-underline"
                          key={`car-p${i}`}
                        >
                          {" "}
                          <a key={`pastVolumes-${i}`} href={e.link}>
                            {" "}
                            {e.title}{" "}
                          </a>
                        </p>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      <section></section>
    </>
  )
}
