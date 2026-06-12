# 8-Week Release Plan

This plan keeps releases small and useful. Each week should include a real code, documentation, test, or package-quality improvement before publishing.

## Release Process

1. Create a branch for the week.
2. Make the planned change.
3. Run `npm test` and `npm pack --dry-run`.
4. Bump `package.json`.
5. Merge to `main`.
6. Create a GitHub Release or manually run the CI workflow to publish with npm Trusted Publishing.

## Schedule

| Week | Version | Focus | Planned Work |
| --- | --- | --- | --- |
| 1 | 1.2.0 | Package quality | Add TypeScript declarations, better npm keywords, package `files`, publish safeguards, and `calculate`/`calc` aliases. |
| 2 | 1.2.1 | README examples | Improve examples and fix typos while keeping the current API stable. |
| 3 | 1.2.2 | Expression tests | Add more tests for decimals, constants, invalid input, and nested expressions. |
| 4 | 1.2.3 | Conversion tests | Add coverage for metric, imperial, and temperature conversions. |
| 5 | 1.2.4 | Geometry tests | Add coverage for area, volume, and graph helpers. |
| 6 | 1.3.0 | Parser polish | Improve expression parser validation and document any behavior changes. |
| 7 | 1.3.1 | Type declarations | Expand declarations for trigonometry, geometry, conversions, and helper methods. |
| 8 | 1.3.2 | Package cleanup | Review npm package contents, badges, CI, and release notes before publishing. |

## Release Notes Template

```md
## Summary
- 

## Validation
- npm test
- npm pack --dry-run
```
