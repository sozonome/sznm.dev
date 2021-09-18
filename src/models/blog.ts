/* eslint-disable @typescript-eslint/no-explicit-any */
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
  thumbnail,
  description,
}
type OptionalFieldsType = keyof typeof OptionalFieldKeys;

export type BlogPostType = Record<MandatoryFieldsType, string> &
  Partial<Record<OptionalFieldsType, string>> & {
    published: boolean;
    contentHtml: any;
    rawContent: any;
    description?: string;
    thumbnail?: string;
    tags?: string[];
  };
