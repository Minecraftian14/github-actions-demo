# GitHub Actions Demo

This is a demonstration of GitHub Actions. The goal is to showcase common CI/CD patterns, automation triggers, and workflow configuration.

## Overview

The project includes four GitHub Actions workflows under [.github/workflows](.github/workflows):

- A minimal "hello world" example
- Continuous integration checks
- Deployment to GitHub Pages
- A Node version matrix test run

These examples are useful for learning how GitHub Actions can automate validation, deployment, and ad hoc scripting tasks.

## Workflows

### 1) Echo Hello World

File: [.github/workflows/echo.yml](.github/workflows/echo.yml)

This is a very small demonstration workflow that runs on every push and prints:

- a greeting: "Hello from GitHub Actions!"
- the current Git commit SHA via `${{ github.sha }}`

This is a useful example for understanding the basics of workflow execution, job steps, and GitHub context expressions.

### 2) Continuous Integration

File: [.github/workflows/ci.yml](.github/workflows/ci.yml)

This workflow runs on every push and validates the project with a simple CI pipeline.

Steps:

- Checks out the repository
- Installs Node.js 22
- Runs `npm ci` to install dependencies exactly as locked in `package-lock.json`
- Runs `npm test` to execute the test suite
- Runs `npm run build` to verify the app still compiles successfully

This is the classic "validate before merge" pattern for a Node application.

### 3) Node Version Matrix

File: [.github/workflows/matrix.yml](.github/workflows/matrix.yml)

This workflow demonstrates a matrix strategy, which runs the same job across multiple versions of Node.js.

Configuration:

- Node versions: 20 and 22
- Runs on Ubuntu
- Executes:
  - `npm ci`
  - `npm test -- --run`

This is a common pattern for validating compatibility across supported runtime versions.

### 4) Build and Deploy

File: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

This workflow is designed for deployment to GitHub Pages.

Trigger conditions:

- Pushes to the `main` branch
- Manual execution via `workflow_dispatch`

It performs the following:

- Checks out the repository
- Sets up Node.js 22 with npm caching
- Installs dependencies with `npm ci`
- Runs tests in non-watch mode: `npm test -- --run`
- Builds the production bundle: `npm run build`
- Uses GitHub Pages actions to publish the built output from `./dist`

The workflow includes permissions for Pages deployment and uses a concurrency group to avoid overlapping deployments.


---


## Local Development Commands

```bash
npm install
npm run dev
npm test
npm run build
```