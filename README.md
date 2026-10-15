# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Styling

Styles are written in Sass (`.scss`). The theme preview switches between light and dark palettes using the theme toggle in the app header; the default follows the system color preference.

## Countdown

Configure the countdown in `src/components/countdown/Countdown.jsx` by changing the `COUNTDOWN_DURATION` values for `days`, `hours`, `minutes`, and `seconds`. The countdown starts when the component mounts.

## Card components

Card components are defined together in `src/components/card/Card.jsx` and can be imported as named exports:

```jsx
import { Card, CardHeader, CardBody, CardFooter, CardSubfooter } from './components/card/Card'

<Card>
  <CardHeader><p>Title</p></CardHeader>
  <CardBody><div>Content</div></CardBody>
  <CardFooter><p>Footer</p></CardFooter>
  <CardSubfooter><button type="button">Action</button></CardSubfooter>
</Card>
```

Use PascalCase in JSX so React treats these as components instead of native HTML tags.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
