import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  console.log("firing from the user loader");

  return json({ userMessage: "This is some JSON data from the user" });
};

import { useFetcher } from "@remix-run/react";

export function User() {
  const fetcher = useFetcher<typeof loader>();

  return (
    <div>
      <h1>User Data</h1>
      <p>{fetcher.data ? fetcher.data.userMessage : "Loading..."}</p>
    </div>
  );
}
