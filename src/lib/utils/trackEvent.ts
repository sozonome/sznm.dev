type TrackEventArgs = {
  eventName: string;
  eventData: Record<string, unknown>;
  url?: string;
  websiteId?: string;
};

/**
 * umami tracker functions:
 * to tracks an event with a custom event type.
 *
 * @docs
 * https://umami.is/docs/track-events
 * https://umami.is/docs/tracker-functions
 */
export const trackEvent = ({
  eventName,
  eventData,
  url,
  websiteId,
}: TrackEventArgs) => {
  if (window.umami && typeof window.umami.trackEvent === "function") {
    window.umami.trackEvent(
      eventName,
      eventData as unknown as string,
      url,
      websiteId
    );
  }
};
