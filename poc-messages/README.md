# POC Messages

## Micro Domain

As a micro domain, the purpose of this repository is to support dedicated feature concerns that are meant to be injected into one or more container domains.

### Components

- Inbox
- Message Badge

### Other Considerations

Micro domains are meant to be full featured - this means that back end calls should go toward a dedicated API for this feature area. Notice that the message count information is served as a Message Badge. It's tempting to give this information as an event, but then the container layer becomes decoupled in two areas: event definition, and event handling.

## Local Development

### Install Dependencies

This POC uses [bun](bun.sh) to manage dependencies. This is generally a drop-in replacement for `npm` or `yarn`, with some performance improvements.

Execute `bun install` to ensure that all dependencies are available.

### Environment Variables

There are not currently any variables defined, but some reasonable follow-up variables could be a Launch Darkly key (if not fulfilled by a gateway configuration) or a back end API path.

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
