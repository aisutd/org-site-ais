/** Shared icon sprite, ported from ais-site/index.html. Referenced via <svg><use href="#i-mail"/></svg> etc. */
export default function PortalIcons() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="ph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m21 17-5-5-9 8" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.4 7H19.6L12 12.2Z" />
      </symbol>
      <symbol id="i-gh" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
        />
      </symbol>
      <symbol id="i-web" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
      </symbol>
      <symbol id="i-quote" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 7h5v5c0 2.8-1.6 4.6-4.4 5l-.6-1.6c1.4-.4 2.2-1.3 2.3-2.4H5V7Zm9 0h5v5c0 2.8-1.6 4.6-4.4 5l-.6-1.6c1.4-.4 2.2-1.3 2.3-2.4H14V7Z" />
      </symbol>
      <symbol id="i-l" viewBox="0 0 10 10">
        <path d="M6.5 2 3.5 5l3 3" fill="none" stroke="currentColor" strokeWidth={1.5} />
      </symbol>
      <symbol id="i-r" viewBox="0 0 10 10">
        <path d="M3.5 2l3 3-3 3" fill="none" stroke="currentColor" strokeWidth={1.5} />
      </symbol>
      <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3b5bff" />
        <stop offset=".55" stopColor="#9a7cff" />
        <stop offset="1" stopColor="#f6b896" />
      </linearGradient>
      <linearGradient id="gB" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f6b896" />
        <stop offset=".5" stopColor="#9a7cff" />
        <stop offset="1" stopColor="#3b5bff" />
      </linearGradient>
    </svg>
  );
}
