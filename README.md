# Website Template with react
![Logo](/public/logo.png)

![Stars](https://img.shields.io/github/stars/Lokrogaming/jsxtemplate1) &nbsp;
![Languages](https://img.shields.io/github/languages/count/Lokrogaming/jsxtemplate1) &nbsp;
![Top Language](https://img.shields.io/github/languages/top/Lokrogaming/jsxtemplate1) &nbsp;
![Last Commit](https://img.shields.io/github/last-commit/Lokrogaming/jsxtemplate1) &nbsp;




| Version      | Key-Features | Date   | Supported
|-----------|--------------|----------|---------|
| V0.7.0    | Initial Commit       | 3.6.2026   | ✅️ |




## 🖼 Picture Gallery (picture from the last commit)
![screenshot](/screenshots/home.png)



##  Hooks

###  useHooks
  
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

## Visitors

![Visitors](https://count.getloli.com/@lokrogaming-jsxtemplate1?name=eleven-shanghai&theme=e621&padding=7&offset=3&align=center&scale=1&pixelated=0&darkmode=1)
