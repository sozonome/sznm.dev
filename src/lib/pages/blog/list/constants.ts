export const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};
