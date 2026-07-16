// Small, simplified icon glyphs for the social platforms CHPX is on —
// single-color, currentColor-based SVGs so they inherit whatever color the
// surrounding link/button applies (matches the .contact-social/.footer-col
// hover treatment) instead of needing separate icon assets to load.

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.3 9.3L15 12L10.3 14.7V9.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M14.5 3c.4 2 1.8 3.4 3.8 3.7v2.6c-1.4 0-2.7-.4-3.8-1.2v6.3a5 5 0 1 1-4.3-4.9v2.7a2.3 2.3 0 1 0 1.9 2.2V3h2.4Z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M13.5 21v-6.8h2.3l.3-2.6h-2.6V9.9c0-.8.2-1.3 1.3-1.3h1.4V6.3c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.2v1.8H9v2.6h2.1V21" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 8.5C9.5 7.2 14.5 7.2 17 8.5C18.5 11 19 14 18.5 16.5C16.8 17.8 15 18.3 13.3 18.5L12.7 17.2C13.4 17 14.1 16.7 14.7 16.3C14.5 16.2 14.4 16 14.2 15.9C11.5 17.1 9 17.1 6.6 15.9C6.5 16 6.3 16.2 6.2 16.3C6.8 16.7 7.4 17 8.1 17.2L7.5 18.5C5.8 18.3 4 17.8 2.3 16.5C1.9 14.2 2.3 11.2 4 8.5" />
      <circle cx="9" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3L3 10.5L10.8 13.2L13.5 21L21 3Z" />
      <path d="M10.8 13.2L21 3" />
    </svg>
  );
}
