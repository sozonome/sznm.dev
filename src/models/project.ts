enum MandatoryStringFieldKeys {
  title,
  description,
}
type MandatoryStringFieldsType = keyof typeof MandatoryStringFieldKeys;

enum OptionalStringFieldKeys {
  projectLink,
  repoLink,
  appStoreLink,
  playStoreLink,
  thumbnail,
}
type OptionalStringFieldsType = keyof typeof OptionalStringFieldKeys;

enum OptionalBooleanFieldKeys {
  highlight,
  featured,
  published,
}
type OptionalBooleanFieldsType = keyof typeof OptionalBooleanFieldKeys;

export type ProjectType = { [key in MandatoryStringFieldsType]: string } &
  { [key in OptionalStringFieldsType]?: string } &
  { [key in OptionalBooleanFieldsType]?: boolean } & {
    stacks?: string[];
  };
