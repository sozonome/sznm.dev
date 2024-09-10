import 'server-only';
import prisma from '~/lib/services/db/client';

export const getViewCount = async (slug: string) => {
  const currentViews = await prisma.views.findFirst({
    where: {
      slug,
    },
  });

  return currentViews?.count ?? 0;
};

export const getAllViewCount = (slugContain?: string) =>
  prisma.views.findMany({
    where: {
      slug: slugContain
        ? {
            contains: slugContain,
          }
        : undefined,
    },
  });

export type ViewCounts = Awaited<ReturnType<typeof getAllViewCount>>;
