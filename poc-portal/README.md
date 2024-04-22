# POC Portal

## Container Domain

As a container domain, the purpose of this repository is to support shell components, sub-domain components, and micro domain integration.

### Shell Components

- Header
- Navigation Menu
- Routing

### Sub-domain Components

- Home Page

### Micro Domain Integration

- Inbox
- Information
- Resource Library

### Other considerations

The natural progression of a feature is to start as a sub-domain, then evolve into a micro domain as the logic grows in size or complexity.

An example of a sub-domain that will likely be promoted into a seperate micro domain is Authentication. This feature is currently a naive textbox on the Home Page, but it should eventually involve deeper validation logic on the front and back end. This back end logic does not have to be custom code - in fact, this would likely be fulfilled by a service like Auth0 or Microsoft Entra.

## Local Development

### Install Dependencies

This POC uses [bun](bun.sh) to manage dependencies. This is generally a drop-in replacement for `npm` or `yarn`, with some performance improvements.

Execute `bun install` to ensure that all dependencies are available.

### Environment Variables

The current environment variables are defined to help with switching between local versus hosted micro domain UI components. Some reasonable follow-up variables could be a Launch Darkly key (if not fulfilled by a gateway configuration) or a back end API path.

- `.env` holds a bank of expected environment variables. This file is checked in to git and should only change when there are new variables.
- `.env.local` is used when the code is running via `bun run dev`. The values are generally seeded from `.env.local.sample`. Developers should feel free to alter the values in this file for their specific needs. This file is not checked in to git.
- `.env.local.sample` holds the suggested default `.env.local` values. This file is checked in to git and should only change when there are new variable suggestions for the whole team.
- `.env.dev` holds the dev hosted values. The servers referenced in this file are generally protected by a private network. If that is the case, then it may be convenient to check this file in to git. If the servers are public facing, then this file should not exist and the values should be specified by a DevOps pipeline.

### Running Locally

Execute `bun run dev` to run the project locally. The current setup requires dependent micro domains to be running on the expected ports. If the developer does not need changes in a particular micro domain, then the `.env.local` src setting may be adjusted to point to the dev hosted endpoint instead.

`bun run dev` will ensure proper source maps are generated. While the hosted environments may not give the same guarantee, this should be the expectation in lower environments. Work with partner teams if they are unsure how to set this up.

### Build Artifacts

Execute `bun run build` to build static files that are meant to be hosted by a CDN.

Execute `bun run build --mode development` to generate source maps. Source maps should be generated in lower environments to help with triage. Source maps should not be generated in PROD because they bloat the overall bundle size significantly. Exceptions may be made if temporary triage is needed. It may make sense to deploy artifiacts without source maps in UAT to keep the hosted environment as similar as possible to PROD.

## Code Organization

### Global Type Definition

Micro domain UI components must be defined in the `global.d.ts` file. There is not currently a mechanism for importing this type information, so adjustments are manual.

> This need could be fulfilled by creating NPM packages - as long as this does not become the method for injecting UI components into the container layer. More research needed in this area.

### Store

The store is the primary mechanism for sharing state across the container layer. The store may be accessed with `window.poc_store` in the Dev Tools Console. The main use case is to invoke `window.poc_store.getAll()` to see all of the current props in the store. `window.poc_store.setProp("KEY", "VALUE")` might be useful if the developer needs to force a specific state.

`useStoreSelector("KEY")` is the primary method to access state. This is preferrable versus invoking `store.getProp("KEY")`.

`store.setProp("KEY", "VALUE")` is the only acceptable method to adjust state. This ensures that an update event is generated, which powers the `useStoreSelector` hook.
