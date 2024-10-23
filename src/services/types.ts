import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export interface DefaultRequest {
  headers?: Record<string, string>;
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

export interface UsersType {
  cell: string;
  dob: {
    age: number;
    date: Date;
  };
  email: string;
  gender: "male" | "female";
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: string;
    state: string;
  };
  street: { name: string; number: number };
  timezone: {
    description: string;
    offset: string;
  };
  login: {
    password: string;
    username: string;
    uuid: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: Date;
  };
}
export interface UserListInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}
export interface UsersListResponse {
  info: UserListInfo;
  results: UsersType[];
}

export interface GoldPriceResponse {
  base: string;
  end_date: string;
  rates: { [key: string]: { USDXAU: number; XAU: number } };
  start_date: string;
  success: boolean;
}
