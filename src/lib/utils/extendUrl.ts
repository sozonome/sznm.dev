import cloneDeepWith from "lodash-es/cloneDeepWith";
import isPlainObject from "lodash-es/isPlainObject";
import pickBy from "lodash-es/pickBy";

export const extendUrl = (baseUrl: string, params: Record<string, unknown>) => {
  const purgedParams = pickBy(params);
  if (!Object.keys(purgedParams).length) {
    return baseUrl;
  }

  const convertedParams = cloneDeepWith(purgedParams, (value) => {
    return !isPlainObject(value) ? String(value) : undefined;
  });
  const urlParams = new URLSearchParams(convertedParams).toString();

  return `${baseUrl}?${urlParams}`;
};
