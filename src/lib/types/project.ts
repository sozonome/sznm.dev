enum MandatoryStringFieldKeys {
  title,
  description,
  id,
}
type MandatoryStringFieldsType = keyof typeof MandatoryStringFieldKeys;

enum OptionalStringFieldKeys {
  projectLink,
  repoLink,
  appStoreLink,
  playStoreLink,
  icon,
  thumbnail,
  thumbnailDark,
  date,
}
type OptionalStringFieldsType = keyof typeof OptionalStringFieldKeys;

enum OptionalBooleanFieldKeys {
  highlight,
  featured,
  published,
  sznmApps,
}
type OptionalBooleanFieldsType = keyof typeof OptionalBooleanFieldKeys;

export type ProjectType = { [key in MandatoryStringFieldsType]: string } & {
  [key in OptionalStringFieldsType]?: string;
} & { [key in OptionalBooleanFieldsType]?: boolean } & {
  stacks?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentHtml?: any;
};
