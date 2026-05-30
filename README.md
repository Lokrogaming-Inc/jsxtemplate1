# ELEVEN (Shanghai) Website
![Logo](/public/logo.png)

![Stars](https://img.shields.io/github/stars/Lokrogaming/eleven-shanghai) &nbsp;
![Languages](https://img.shields.io/github/languages/count/Lokrogamimg/eleven-shanghai) &nbsp;
![Top Language](https://img.shields.io/github/languages/top/Lokrogaming/eleven-shanghai) &nbsp;
![Last Commit](https://img.shields.io/github/last-commit/Lokrogaming/eleven-shanghai) &nbsp;


##  📋 Versions

```text
Versions:
   V0.7.0 
 ___________________

   * Added Bash Scripts for faster and a more efficient way to commit to github
   * Added a useShare-Hook for easier sharing of text, URls and more!
 ___________________
  
 V0.7.5
 ___________________
   
   * Added a share button, so the user is able to share the site
   * Added a universal useShare-Hook for sharing multiple types of text/URls.
 ___________________
 
```

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

https://count.getloli.com/@eleven-shanghai?name=eleven-shanghai&theme=e621&padding=7&offset=3&align=center&scale=1&pixelated=1&darkmode=1
