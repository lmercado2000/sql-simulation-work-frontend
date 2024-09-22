import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../work-school-simulator-backend/src/router";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc"
    })
  ]
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
