---
title: Custom Scrollbar
description: define your own custom scroll bar
published: true
date: 2022-07-22
stacks:
  - css
  - chakra-ui
---

## CSS

```css
::-webkit-scrollbar {
  width: 0.75rem;
  height: 0.75rem;
  background-color: blue;
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: gray;
}

/** firefox **/
html {
  scrollbar-width: thin;
  scrollbar-color: blue;
}
```

## References

- MDN
  - [https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility)
  - [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars#browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars#browser_compatibility)
- W3Schools: [https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)
- [sznm.dev](http://sznm.dev) - chakra-ui implementation
  - [https://github.com/sozonome/sznm.dev/commit/f967221e40c7d680eb25ca4944ede4f5def2b628](https://github.com/sozonome/sznm.dev/commit/f967221e40c7d680eb25ca4944ede4f5def2b628)
  - [https://github.com/sozonome/sznm.dev/commit/76c3ce6895b6de5b0a0d4195378cf68cde269054](https://github.com/sozonome/sznm.dev/commit/76c3ce6895b6de5b0a0d4195378cf68cde269054)
