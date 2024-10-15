import { getCookie } from "cookies-next";

import { RequestOptions } from "../types";

// ==================================== request with Authorization header =====================================
export const authRequest = async (
  url: string,
  { method = "GET", headers, body, ssr, ...restOptions }: RequestOptions
) => {
  const baseURL = process?.env?.NEXT_PUBLIC_API_URL ?? "";
  const reqHeaders = new Headers();

  reqHeaders.set("Accept-Language", "en-US");

  if (body && !(body instanceof FormData)) {
    reqHeaders.set("Content-Type", "application/json");
  }

  if (headers) {
    Object.entries(headers).forEach((el) => reqHeaders.set(el[0], el[1]));
  }

  const newOptions = {
    method,
    headers: reqHeaders,
    body,
    ...restOptions,
  };

  const response = await fetch(baseURL + url, newOptions)
    .then((res) => res.json())
    .then((res) => res);

  return response;
};
