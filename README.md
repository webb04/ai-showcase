## Running project
- `yarn install` or `npm install`
- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000)


## Future improvements
- Unit tests for components and functions in `agentUtils.ts`
- Move common styles into `styles.ts`
- Using [Storybook](https://storybook.js.org/) as documentation for components and developing components in isolation
- Integration testing (https://www.chromaticqa.com/)
- Setting minimum test coverage targets on the core logic ~75%
- ESLint rules
- Vulnerability checks for npm packages (Snyk)
- CI (GitHub actions) for linting, testing, building, security checks that runs before releasing to production
- Continuous deployment
- Node/Go server serving the API
- More webpack configuration for local development and production builds
- Performance/accessibility audits using Google's lighthouse
- Reporting on pull requests to detect bundle size increases (https://danger.systems/js/)
- Wider browser compatibility using Babel and polyfills (https://polyfill.io/v3/)
