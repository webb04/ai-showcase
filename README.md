## Running project
- `yarn install`
- `yarn start`
- Open [http://localhost:3000](http://localhost:3000)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />


## Future improvements
- Unit tests for components and functions in `agentUtils.ts`
- Making use of a design system that shares design tokens and components across projects
- Using [Storybook](https://storybook.js.org/) as documentation for components and developing components in isolation
- Integration testing using something like https://www.chromaticqa.com/
- Setting minimum test coverage targets on the core logic ~75%
- Adding the most important ESLint rules agreed on with the team
- Adding vulnerability checks for npm packages (Snyk)
- Adding a CI (GitHub actions) for linting, testing, building, security checks that runs before releasing to production
- Adding continuous deployment so that merging to master will release to production
- Node/Go server serving the API
- More webpack configuration for local development and production builds
- Performance/Accessibility audits using Google's lighthouse
- Reporting on pull requests to detect bundle size increases (https://danger.systems/js/)
- Wider browser compatibility using Babel and polyfills (https://polyfill.io/v3/)
- Security - better protection against XSS, making the project available only with an internal IP address
