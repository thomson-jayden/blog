# Repository Guidelines

These instructions apply to the entire repository.

## Repository Structure

- `apps/<app-name>/` contains independently buildable and deployable units. Each direct child is one deployable application. The current examples are `apps/api/` and `apps/frontend/`.
- `.github/workflows/` contains GitHub Actions workflows for CI/CD pipelines.
- `docs/` contains architecture, setup, operational, and other repository documentation.

## Architecture Rules

- Keep application-specific code within the application that owns it.
- Keep deployment and pipeline definitions in `.github/workflows/`; keep supporting explanations and operational guidance in `docs/`.

## Working in This Repository

- Add new deployable units as direct children of `apps/`.
- Update relevant documentation when architecture, setup, or operational behavior changes.
- Update relevant workflows when build, test, release, or deployment behavior changes.
