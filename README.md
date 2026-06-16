# Techfolio

Techfolio is a Dota-inspired developer portfolio built as a static-first Next.js application inside a small pnpm monorepo. The project combines a highly customized personal landing page, interactive portfolio sections, progressive web app support, and a Firebase-ready static export workflow.

## Overview

The repository currently contains:

- A NextJS client application that powers the portfolio UI.
- A small TypeScript package for API-related code and shared domain models.
- Docker and Firebase configuration for production delivery.

The client is designed around hand-authored portfolio data rather than a CMS. Personal information, projects, achievements, companies, and other showcase content are defined directly in the codebase for simple customization and fast static builds.

## Technology Stack

- NextJS 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- PNPM Workspaces
- Turbo
- NextJS PWA Support
- Firebase Hosting

## Repository Structure

```text
Techfolio.Client/
├── apps/
│   └── client/                 # Main NextJS Portfolio Application
├── packages/
│   └── techfolio-api/          # TypeScript Package for API / ESLint / Shared Logic
├── Dockerfile                  # Multi-stage Production Images
├── docker-compose.yml          # Local Container Orchestration
├── firebase.json               # Firebase Hosting Configuration
├── package.json                # Workspace Scripts
└── pnpm-workspace.yaml         # Workspace Definition
```

## Prerequisites

Before running the project locally, make sure the following tools are installed:

- NodeJS 18 or later
- PNPM v10 or later

Docker is optional, but recommended if you want to run the static production build in a container.

## Getting Started

### 1. Installation of Dependencies

From the repository root, run the following command:

```bash
pnpm install
```

### 2. Starting the Development Server

Run the client application via the following script:

```bash
pnpm --filter @techfolio/client development
```

The local development server starts on the following server and port:

```text
http://localhost:8000
```

## Building for Production

Create the static production build with the respective script:

```bash
pnpm --filter @techfolio/client build
```

The generated static output is written to the following directory:

```text
apps/client/out
```

Because the client is configured with `output: "export"`, the primary production artifact is a static site rather than a long-running Next.js server.

## Running the Production Build Locally

After building, serve the `apps/client/out` directory using any static file server. One common approach is Docker, which is already configured in this repository.

## Docker

Build and start the containerized version with the following command from the root repository:

```bash
docker compose up --build
```

The application will be available at the following server and port:

```text
http://localhost:8000
```

The container serves the exported static site from `apps/client/out` using `http-server`.

## Deployment

This repository is configured for Firebase Hosting. The hosting target is via the following directory:

```text
apps/client/out
```

Typical Deployment Flow:

1. Build the client with the following script:

```bash
pnpm --filter @techfolio/client build
```

2. Deploy from the root repository with the following command:

```bash
pnpm deploy
```

Make sure Firebase credentials and project access are configured in your environment before deploying.

## Available Scripts

### Root Workspace Scripts

Run these from the repository root:

- `pnpm build` - Builds all workspace packages through Turbo.
- `pnpm lint` - Runs the configured lint command across workspaces.
- `pnpm format` - Formats the repository with Prettier.
- `pnpm test` - Placeholder test command.
- `pnpm deploy` - Deploys the project using Firebase.

### Client Application Scripts

Run these from the repository root with a filter, or from `apps/client` directly, mentioned below:

- `pnpm --filter @techfolio/client development` - Starts the NextJS development server on port `8000`.
- `pnpm --filter @techfolio/client build` - Builds and exports the static site.

### API Package Script

- `pnpm --filter @techfolio/techfolio-api build` - Builds the TypeScript package in `packages/techfolio-api`.

## Customization Guide

The portfolio content is currently code-driven. The main customization points are as follows:

- `apps/client/application/services/GenericService.ts`
  - Update personal information, projects, featured skills, companies, achievements, dogs, and portfolio copy.
- `apps/client/public/`
  - Replace or add static assets such as icons, images, the manifest, and the resume PDF.
- `apps/client/app/modules/sections/`
  - Adjust landing page sections and presentation logic.
- `apps/client/app/page.tsx`
  - Review the overall landing page composition and section ordering.

For example, if you fork this repository for your own portfolio, a typical first pass is to update the following:

1. Replace the personal profile data in `GenericService.ts`.
2. Update the resume file under `apps/client/public/resume/`.
3. Replace images in `apps/client/public/images/`.
4. Review project, skill, and achievement entries to match your own background.

## Environment Variables

No application-specific environment variables are required for local development at this time.

## Notes

- The client uses PWA support through `next-pwa`. Service worker registration is disabled in development and enabled for production builds.
- The current client lint script is defined as `next lint`. If you plan to enforce linting with Next.js 16, you may want to migrate this command to the standalone ESLint CLI workflow supported by your toolchain.

## Troubleshooting

### 1. Development Server Does Not Start

- Confirm you are running the command from the repository root.
- Confirm `pnpm install` completed successfully.
- Confirm your Node.js version is compatible with the project.

### 2. Static Build Succeeds But You Cannot Preview It

- Make sure you are serving `apps/client/out`, not the source directory.
- If you are using Docker, rebuild with `docker compose up --build`.

### 3. Firebase Deploy Fails

- Verify Firebase authentication is configured locally.
- Confirm the intended Firebase project is selected.
- Make sure `apps/client/out` exists by running the production build first.
