---
title: Overflow Scroll without Scrollbar
description: for sleek overflow scroll in mobile viewport
published: true
date: 2022-07-22
stacks:
  - css
  - chakra-ui
---

## CSS

```css
.some-component {
  overflow-x: scroll; /* or overflow-y */
}

.some-component::-webkit-scrollbar {
  display: none;
}
```

## Chakra-UI

```jsx
<Flex overflow="scroll" css={{ "&::-webkit-scrollbar": { display: "none" } }}>
  ...some children
</Flex>
```

## References

- [https://stackoverflow.com/questions/65042380/how-to-add-webkit-scrollbar-pseudo-element-in-chakra-ui-element-react](https://stackoverflow.com/questions/65042380/how-to-add-webkit-scrollbar-pseudo-element-in-chakra-ui-element-react)
