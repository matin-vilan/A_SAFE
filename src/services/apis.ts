import { authRequest } from "./fetcher";
import {
  DefaultRequest,
  GoldPriceResponse,
  PostsListResponse,
  UsersListResponse,
} from "./types";
import { toQueryParams } from "./utils/helpers/general";

export const postsList = async (
  args?: {
    queryParameters?: unknown;
  } & DefaultRequest
): Promise<PostsListResponse[]> =>
  await authRequest(
    `/posts` + toQueryParams(args?.queryParameters),
    {
      headers: args?.headers,
    },
    {}
  );

export const singlePost = async (
  args: {
    queryParameters?: unknown;
    id: string;
  } & DefaultRequest
): Promise<PostsListResponse> =>
  await authRequest(
    `/posts/${args.id}` + toQueryParams(args?.queryParameters),
    {
      headers: args?.headers,
    },
    {}
  );

export const usersList = async (
  args?: {
    queryParameters?: { results: number };
  } & DefaultRequest
): Promise<UsersListResponse> =>
  await authRequest(
    `/` + toQueryParams(args?.queryParameters),
    {
      headers: args?.headers,
    },
    { isLargeData: true }
  );

export const goldPrices = async (
  args?: {
    queryParameters: {
      api_key: string;
      base: string;
      currencies?: string;
      start_date: string;
      end_date: string;
    };
  } & DefaultRequest
): Promise<GoldPriceResponse> =>
  await authRequest(
    `/timeframe` + toQueryParams(args?.queryParameters),
    {
      headers: {
        access_key: process.env.NEXT_PUBLIC_GOLD_API_KEY || "",
        ...args?.headers,
      },
    },
    { isGoldPrice: true }
  );
