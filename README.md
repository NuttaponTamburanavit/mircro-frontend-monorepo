# Mircro Frontend Monorepo

This project make for expirement micro frontend by NextJs

<br/>

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Refs](#refs)

<br/>

## Technologies

Project using stack

- Lerna (managing multiple repository)
- PNPM (package manager)
- NextJs (UI framework)
- AntD (UI library)

<br/>

## Setup

To run this project, install it locally using pnpm:

### 1. Install package

> On root project

```sh
$ pnpm install
```

### 2. Run project

> All project start up

```sh
$ pnpm lerna run dev

# > Lerna (powered by Nx) Running target dev for 3 projects:
# ready - started server on http://localhost:3002 (component-web)
# ready - started server on http://localhost:3001 (training-center-web)
# ready - started server on http://localhost:3000 (admin-web)
```

<br/>

## Refs

1. [Lerna](https://lerna.js.org/docs/introduction)
2. [PNPM x Lerna](https://lerna.js.org/docs/recipes/using-pnpm-with-lerna)
3. [PNPM CLI](https://pnpm.io/motivation)
4. [NextJS](https://nextjs.org/docs/getting-started)
5. [AntD](https://ant.design/docs/react/introduce)
