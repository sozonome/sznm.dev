export const isMac =
  typeof navigator === "object" &&
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
