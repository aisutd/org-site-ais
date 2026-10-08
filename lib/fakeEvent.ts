import { Event } from './types';

/**
 * Shown when there are no real upcoming events yet, so the "upcoming" sections never look
 * empty. Has no real detail page — anything linking to it should fall back to /events.
 */
export const FAKE_UPCOMING_EVENT: Event = {
  id: '__placeholder__',
  title: 'Next event coming soon',
  description: 'We\'re lining up our next event — check back soon or follow our socials for the announcement.',
  presenters: [],
  location: 'TBA',
  eventType: 'Event',
  startDate: '',
  endDate: '',
  lastUpdated: new Date(0).toISOString(),
};

export function isFakeEvent(e: Event) {
  return e.id === FAKE_UPCOMING_EVENT.id;
}
