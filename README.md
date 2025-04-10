# Personal Portfolio Website

![Banner (Decorative)](./docs/ppw_banner_raster.PNG)

This is a personal portfolio website built with Vue.js and TypeScript. This allows me to
showcase my projects in one central place. **This website is still under construction**.

The website prioritises simplicity, accessibility, and user experience above the latest
trends. The aim was to create also a timeless digital experience that anyone will be able
use. More details:

* Simplicity: Minimal distractions, simple typography, clean layouts.
* Accessibility: Following WCAG Guidelines (Constrast Ratios, Alt Text, ARIA Labels +
Roles)
* User Experience: Intuitive interactions, responsive design.

This project intentionally minimises the reliance on dependencies, allowing for better
performance and long-term reliability.

The Inter typeface is self-hosted using the fontsource variable package to avoid the using
Google Fonts for privacy.

![Screenshot of Website](./docs/ppw-screenshot.PNG)

## Running Locally

Running the website locally is simple as a few commands after cloning the git repository.
There are no external measures to be setup.

```sh
# Install dependencies.
npm install
# Run local server.
npm run dev
```

## Changelog

* Version 5.0 --25H1F "TBD"
  * Mitigated Vite Vulnerabilities.
  * Updated Internal Structure.
  * Updated Styles - Locally Scoped Component Variables.
  * Updated All Components.
  * Updated to Vue Shorthand HTML Attributes.
  * Migrated Fully to Composition API with Setup Attribute.
* Version 4.1 --25H1E "24/03/2025"
  * Improved Accessibility: Fixed some issues highlighted issues by ARC Toolkit.
    * Reduced Link Breaks _Note: Line breaks are still used for visual purposes._
    * _Note: Header "banner", Footer "contentinfo", Main "main" are containerised._
  * Updated Store Data Retrieval from Constant Arrays to Functions.
  * Added Meta Tags for Better SEO.
  * Added Projects Shown Count Badge.
  * Added Robots Text File.
  * Added Image Alt Text System.
  * Updated Footer Text Order.
  * Simplified Some Component Templates and Styles.
  * Updated Card to Use Full Height in Grid.
* Version 4.0 --25H1D "20/03/2025"
  * Uses Custom Component System.
  * Implemented Project Filter System.
  * Project Cards Link to GitHub Repositories.
  * Redesigned Header and Navigation.
  * Updated Card Hover Effects.
  * Improved Accessibility: ARIA and Role Attributes.
  * Updated Colours.
  * Continued migration from Options API to Composition API (_Without Setup Tag_).
  * Updated for Rounded Corners Trend. (_Slightly_).

## To-Do

* Improve Accessibility: Add Skip Navigation Button.
* Improve Accessibility: ARIA Labels based on Headings.
* Add E2E Testing.
* Add Project Specific Pages.
* Extract Data to Store.

## Known Issues and Limitations

* The `/alpha` is not for public use (for development testing purposes).
* The `/about` route is not ready.
* Navigation Landmark is hidden until menu button is clicked.
* Cannot use arrow key navigation project filter tabs.
* Contrast ratio on dark mode badge component could be better.

## References

* Inter Font Family: <https://rsms.me/inter/>
* Inter on Fontsource: <https://fontsource.org/fonts/inter>
* CSS Reset: <https://www.joshwcomeau.com/css/custom-css-reset/>
* Tailwind v4.0 Colours (Zinc and Teal): <https://tailwindcss.com/docs/colors>
* ARC Toolkit: <https://www.tpgi.com/arc-platform/arc-toolkit/>