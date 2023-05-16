/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
declare var umami: umami.umami;

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare namespace umami {
  interface umami {
    track(payload: Record<string, string | number>): void;
    track(eventName: string, eventData?: Record<string, string | number>): void;
  }
}
