import { RequestOptions } from "../types";

// ==================================== request with Authorization header =====================================
export const authRequest = async (
  url: string,
  { method = "GET", headers, body, ...restOptions }: RequestOptions,
  {
    isLargeData = false,
    isGoldPrice = false,
  }: { isLargeData?: boolean; isGoldPrice?: boolean }
) => {
  const baseURL = isLargeData
    ? process?.env?.NEXT_PUBLIC_USER_API_URL
    : isGoldPrice
    ? process.env.NEXT_PUBLIC_GOLD_API_URL
    : process?.env?.NEXT_PUBLIC_API_URL;
  console.log({ baseURL, isGoldPrice });

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
