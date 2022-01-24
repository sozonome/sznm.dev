import { SystemStyleObjectRecord } from "@chakra-ui/react";

const layerStyles: SystemStyleObjectRecord = {
  layoutBlock: {
    paddingY: 22,
    paddingX: [22, 22, 11, 0],
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

export default layerStyles;
