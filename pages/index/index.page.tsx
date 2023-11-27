import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { PageProps, homeProps } from "~/renderer/types";
import { usePageContext } from "~/renderer/usePageContext";

export { Page };

function Page({ props }: { props: homeProps }) {
  const context = usePageContext();
  console.log(props);
  console.log(context);
  return (
    <div>
      <section></section>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Home
              </h1>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
                Item
              </h2>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}
