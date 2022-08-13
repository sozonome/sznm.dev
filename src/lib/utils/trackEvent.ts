type TrackEventArgs = {
  eventValue: string;
  eventType: string;
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
  eventValue,
  eventType,
  url,
  websiteId,
}: TrackEventArgs) => {
  if (window.umami && typeof window.umami.trackEvent === "function") {
    window.umami.trackEvent(eventValue, eventType, url, websiteId);
  }
};
