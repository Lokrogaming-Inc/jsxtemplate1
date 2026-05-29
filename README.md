# 📋 Versions

```text
Versions:
   V0.7.0 
 -------------------

   * Added Bash Scripts for faster and a more efficient way to commit to github
   * Added a useShare-Hook for easier sharing of text, URls and more!

```

# Hooks

## useHooks
  
Basic Share Button: 
```jsx
import { useShare } from "../hooks/useShare";

export default function Button() {
  const { shareCurrentUrl } = useShare();

  return (
    <button
      onClick={() =>
        shareCurrentUrl({
          title: "Meine Website",
          text: "Schau dir das an!",
        })
      }
      className="px-4 py-2 bg-blue-600 text-white rounded-xl"
    >
      Share
    </button>
  );
}
```

Text Share:
```jsx
const { shareText } = useShare();

shareText("Das ist ein cooler Text");
```

URl Sharing:
```jsx
const { shareUrl } = useShare();

shareUrl("https://google.com", {
  title: "Google",
});
```

Share current URl:
```jsx
const { shareCurrentUrl } = useShare();

shareCurrentUrl({
  title: "Check this page",
  text: "Sehr coole Seite",
});
```

