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

export const getAllViewCount = async () => {
  return prisma.views.findMany();
};
