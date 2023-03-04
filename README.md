This is a Storybook within a Next.js app.

To run just the Next.js app do `npm install` and `npm run dev`

It does have a redirect from Next.js that looks for the Meshery server to be up. You can do either the Docker build or just have a server running, but it is sort of a placeholder.

To run just the Storybook, run `npm run storybook`.

`pages`
- Login (provider auth) - requires selecting Meshery as provider to login
    * Layout props that includes the React children
    * Dropdown menu with options to select
    * Footer with company's name
- Dashboard (main page) - requires authentication to see the dashboard
    * Layout props that includes the React children
    * Horizontal header menu that includes user's settings
    * Vertical sidebar menu that includes various links to pages
- Settings
- Extensions