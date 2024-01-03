# vue-tsx-playground

The purpose of this project is to explore the possibilities of using typesafe JSX and functional components in Vue 3.

### Limitations of functional components
Functional components do not retain state and should only be used for layout purposes.
Because of this, functional components may have a performance advantage over traditional components.

[Read more](https://vuejs.org/guide/extras/render-function.html#functional-components)

### Using JSX inside single file components
JSX can be used inside the `<script setup lang="tsx">` tag of single file components.
This can be taken advantage of to reduce repetition in the template.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
