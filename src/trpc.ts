import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../work-school-simulator-backend/src/router";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc"
    })
  ]
});
