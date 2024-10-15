// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toQueryParams = (options?: any) => {
  const queryParams = new URLSearchParams();

  if (!options) return "";
  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      if (
        typeof options[key] === "string" ||
        typeof options[key] === "number"
      ) {
        queryParams.append(key, String(options[key]));
      }

      if (Array.isArray(options[key])) {
        for (const item in options[key]) {
          queryParams.append(`${key}[]`, options[key][item]);
        }
      }
    }
  }

  const decodedUrlParams = decodeURIComponent(queryParams.toString());
  return "?" + decodedUrlParams;
};
