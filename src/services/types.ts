import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export interface DefaultRequest {
  headers?: Record<string, string>;
  ssr?: { cookies: () => ReadonlyRequestCookies };
}

export type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: string | FormData;
  ssr?: { cookies: () => ReadonlyRequestCookies };
  mode?: "no-cors" | "cors" | "same-origin"; // no-cors, *cors, same-origin
  cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
  credentials?: "include" | "same-origin" | "omit";
  redirect?: "manual" | "follow" | "error";
  referrerPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
};

//  - - - - - - API TYPES - - - - - -

export interface PostsListResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
