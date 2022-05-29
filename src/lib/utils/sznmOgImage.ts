import pickBy from "lodash-es/pickBy";

import { baseUrl } from "lib/constants/baseUrl";

type OgImageOption = {
  heading?: string;
  text?: string;
};

export const sznmOgImage = (options: OgImageOption) => {
  const purgedOptions = pickBy(options);
  const urlParams = new URLSearchParams(purgedOptions).toString();
  const params = urlParams ? `?${urlParams}` : "";

  return `${baseUrl}/api/generate${params}`;
};
