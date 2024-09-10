import parser from 'ua-parser-js';

export const isMac =
  typeof navigator === 'object' &&
  /Mac|iOS/.test(parser(navigator.userAgent).os.name ?? '');
