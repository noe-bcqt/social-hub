import type { ReactElement } from "react";
import type { SocialId } from "./config";

const p = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

// Icônes monochromes (currentColor) : elles suivent le thème.
export const icons: Record<SocialId, ReactElement> = {
  instagram: (
    <svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </svg>
  ),
  snapchat: (
    <svg {...p}>
      <path d="M12 3.5c-2.8 0-4.5 2-4.5 4.6v2c-.7.3-1.4.4-2.3.4.4.9 1.3 1.3 2.3 1.6-.4 1.3-1.5 2.2-3 2.8 1 .7 2.2.7 3.2.9.3.6.6 1.3 1.2 1.3.8 0 1.6-.8 3.1-.8s2.3.8 3.1.8c.6 0 .9-.7 1.2-1.3 1-.2 2.2-.2 3.2-.9-1.5-.6-2.6-1.5-3-2.8 1-.3 1.9-.7 2.3-1.6-.9 0-1.6-.1-2.3-.4v-2c0-2.6-1.7-4.6-4.5-4.6z" />
    </svg>
  ),
  tiktok: (
    <svg {...p}>
      <path d="M14.5 3.5v10.2a3.7 3.7 0 1 1-3.7-3.7" />
      <path d="M14.5 3.5c.4 2.4 1.9 3.9 4.5 4.1" />
    </svg>
  ),
  spotify: (
    <svg {...p}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M7 9.4c3.6-1 7.2-.8 10.2 1" />
      <path d="M7.6 12.8c2.800-.7 5.600-.5 8 1" />
      <path d="M8.200 16c2.100-.5 4.100-.3 6 .8" />
    </svg>
  ),
};
