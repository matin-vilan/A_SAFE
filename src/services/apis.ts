import { authRequest } from "./fetcher";
import { DefaultRequest, PostsListResponse, UsersListResponse } from "./types";
import { toQueryParams } from "./utils/helpers/general";

export const postsList = async (
  args?: {
    queryParameters?: unknown;
  } & DefaultRequest
): Promise<PostsListResponse[]> =>
  await authRequest(`/posts` + toQueryParams(args?.queryParameters), {
    ssr: args?.ssr,
    headers: args?.headers,
  });

export const usersList = async (
  args?: {
    queryParameters?: { results: number };
  } & DefaultRequest
): Promise<UsersListResponse> =>
  await authRequest(
    `/` + toQueryParams(args?.queryParameters),
    {
      ssr: args?.ssr,
      headers: args?.headers,
    },
    true
  );
