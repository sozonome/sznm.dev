import pickBy from 'lodash-es/pickBy';

type OgImageOption = {
  heading?: string;
  text?: string;
};

export const sznmOgImage = (options: OgImageOption) => {
  const purgedOptions = pickBy(options);
  const urlParams = new URLSearchParams(purgedOptions).toString();
  const params = urlParams ? `?${urlParams}` : '';

  return `https://og.sznm.dev/api/generate${params}`;
};
