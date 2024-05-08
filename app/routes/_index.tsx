import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "./user";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  console.log("firing from the root loader");
  return json({ message: "This is some JSON data from the index route" });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Index Data</h1>
      <p>{data.message}</p>
      <User />
    </div>
  );
}
