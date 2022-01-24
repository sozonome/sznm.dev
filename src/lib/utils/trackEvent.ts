/**
 * umami tracker functions:
 * to tracks an event with a custom event type.
 *
 * @docs
 * https://umami.is/docs/track-events
 * https://umami.is/docs/tracker-functions
 */
export const trackEventToUmami = (
  event_value: string,
  event_type: string,
  url?: string,
  website_id?: string
) => {
  if (window.umami && typeof window.umami.trackEvent === "function") {
    window.umami.trackEvent(event_value, event_type, url, website_id);
  }
};
