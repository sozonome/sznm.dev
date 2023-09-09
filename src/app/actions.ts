'use server';

import prisma from '~/lib/services/db/client';

// eslint-disable-next-line import/prefer-default-export
export const incrementViews = async (slug: string) => {
  const currentViews = await prisma.views.findFirst({
    where: {
      slug,
    },
  });

  if (!currentViews) {
    const newViewCount = await prisma.views.create({
      data: {
        slug,
        count: 1,
      },
    });

    return newViewCount.count;
  }

  const updatedViewCount = await prisma.views.update({
    where: {
      slug,
    },
    data: {
      count: (currentViews.count ?? 1) + 1,
    },
  });

  return updatedViewCount.count;
};
