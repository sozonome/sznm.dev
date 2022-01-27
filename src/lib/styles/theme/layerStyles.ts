import type { SystemStyleObjectRecord } from "@chakra-ui/react";

export const layerStyles: SystemStyleObjectRecord = {
  layoutBlock: {
    marginX: "auto",
    width: "full",
    maxWidth: {
      base: "100vw",
      md: "85vw",
      lg: "800px",
    },
    paddingY: 4,
    paddingX: {
      base: 6,
      md: 2,
      lg: 0,
    },
  },
  glow: {
    filter: "drop-shadow(0 0 12px #454a58)",
  },
  "blur-bg": {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  },
};
