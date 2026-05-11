type EventName =
  | "cta_click"
  | "contact_submit_attempt"
  | "contact_submit_success"
  | "contact_submit_error"
  | "nav_click";

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props?: EventProps }) => void;
  }
}

export function track(name: EventName, props?: EventProps) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...props });
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", name, props ?? {});
  }
}
