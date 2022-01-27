# vanilla-counter-class-typescript

[![build](https://github.com/hironomiu/vanilla-counter-class-typescript/actions/workflows/webpack.yml/badge.svg)](https://github.com/hironomiu/vanilla-counter-class-typescript/actions/workflows/webpack.yml)

TypeScript + Webpack + Babel + Jest + Sass 構成で生 JS でのカウンターアプリ

![demo](./demo.gif)

## Run

```
npm start
```

## Build

```
npm run build
```

## Test

```
npm test
```

## SetUp

```
npm install
```

## Install Memo

### initialize

```
npm init -y
```

### Webpack

```
npm install --save-dev webpack webpack-cli webpack-merge clean-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack-dev-server
```

### TypeScript

```
npm install --save-dev typescript ts-loader
npx tsc --init
```

### Babel

```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-typescript
```

### ESlint

```
npm install --save-dev eslint eslint-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Jest

```
npm install --save-dev jest jsdom eslint-plugin-jest @types/jest @types/jsdom
```

```
npm install --save-dev ts-node ts-jest
```

```
npx jest --init
```

### CSS(sass)

```
npm install --save-dev sass-loader node-sass css-loader mini-css-extract-plugin
```

### CSS(postcss)

```
npm install --save-dev postcss-loader autoprefixer
```

### CSS(最適化)

```
npm install --save-dev cssnano
```
