import { useRouteError } from "react-router";

import ErrorProps from "@/models/someInterfaces";

export default function Error(): JSX.Element {
  const error = useRouteError() as ErrorProps;
  return (
    <div>
      <h1>Error</h1>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
}
