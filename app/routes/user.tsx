import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ userMessage: "This is some JSON data from the user" });
};

import { useLoaderData } from "@remix-run/react";

export function User() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>User Data</h1>
      <p>{data.userMessage}</p>
    </div>
  );
}