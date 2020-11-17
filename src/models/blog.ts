enum MandatoryFieldKeys {
  id,
  title,
  date,
  slug,
  path,
  type,
}
type MandatoryFieldsType = keyof typeof MandatoryFieldKeys;

enum OptionalFieldKeys {
  description,
  thumbnail,
}
type OptionalFieldsType = keyof typeof OptionalFieldKeys;

export type BlogPostType = {
  [key in MandatoryFieldsType]: string;
} &
  {
    [key in OptionalFieldsType]?: string;
  } & {
    published: boolean;
    contentHtml: any;
    rawContent: any;
    description?: string;
    thumbnail?: string;
    tags?: string[];
  };
