import { useCallback } from "react";

export function useShare() {
  // Core Share Function (low level)
  const share = useCallback(async ({ title, text, url }) => {
    const payload = {
      title: title || "Share",
      text: text || "",
      url: url || window.location.href,
    };

    // Native Share API
    if (navigator.share) {
      try {
        await navigator.share(payload);
        return { success: true, method: "native" };
      } catch (err) {
        return { success: false, method: "native", error: err };
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(payload.url);
      return { success: true, method: "clipboard" };
    } catch (err) {
      return { success: false, method: "clipboard", error: err };
    }
  }, []);

  // Share current page URL
  const shareCurrentUrl = useCallback(
    (options = {}) => {
      return share({
        title: options.title,
        text: options.text,
        url: window.location.href,
      });
    },
    [share]
  );

  // Share only text
  const shareText = useCallback(
    (text, options = {}) => {
      return share({
        title: options.title,
        text,
        url: window.location.href,
      });
    },
    [share]
  );

  // Share only URL
  const shareUrl = useCallback(
    (url, options = {}) => {
      return share({
        title: options.title,
        text: options.text,
        url,
      });
    },
    [share]
  );

  // Share "page + custom text"
  const sharePage = useCallback(
    (text, options = {}) => {
      return share({
        title: options.title,
        text,
        url: window.location.href,
      });
    },
    [share]
  );

  return {
    share,
    shareText,
    shareUrl,
    shareCurrentUrl,
    sharePage,
  };
}
