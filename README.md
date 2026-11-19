# Cabinly guest website

A Next.js App Router prototype for a cabin-stay website. It has a responsive home page, a sample cabin catalog with capacity filters, an about page, an account-status page and a custom not-found page.

The catalog is local sample data in `app/data/cabins.js`. The four photos were reused from the existing Cabinly repository. This project currently has no authentication, live availability, reservations or payments. The interface labels that limitation and does not collect account credentials.

## Run locally

Use Node 22.14 or newer (Node 22 is recorded in `.nvmrc`). No service keys are required.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 4182
```

For the production server:

```sh
npm run build
npm start -- --hostname 127.0.0.1 --port 4182
```

Open http://127.0.0.1:4182. Routes: `/`, `/cabins`, `/about`, `/account`.

## Verification

```sh
npm test
npm run lint
npm run build
npm audit
```

On 2026-11-19: 3 automated tests passed, lint and production build passed, and npm audit reported 0 vulnerabilities in the installed dependency tree. Browser checks covered navigation, capacity filtering, about/account routes and 390px mobile layouts. The preview showed no broken images or browser console errors. Screenshots are in the local, ignored `qa` folder.

## Hosting and future integration

Deploy through a host with Next.js runtime support, using `npm run build`. Do not set the publish directory to the source tree or treat `.next` as a generic static website. A plain static export would require an explicit export configuration and a compatible image strategy.

Before enabling booking or accounts, add server-side authentication, validated reservation endpoints, real availability and persistence. The separate Cabinly admin project has its own staff access model; this guest prototype does not share that service automatically.

Changes are on `codex/fix-next-cabinly`. No deployment was performed.
