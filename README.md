# Personal Portfolio Website

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/ppw-banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="./docs/ppw-banner-light.png">
  <img alt="banner" src="./docs/ppw-banner.png">
</picture>

This is a personal portfolio website built with Vue.js and TypeScript. This allows me to
showcase my projects in one central place. **This website is still under construction**.

The website prioritises simplicity, accessibility, and user experience above the latest
trends. The aim was to create also a timeless digital experience that anyone will be able
to use. More details:

* Simplicity: Minimal distractions, simple typography, clean layouts.
* Accessibility: Following WCAG Guidelines (Contrast Ratios, Alt Text, ARIA Labels +
Roles)
* User Experience: Intuitive interactions, responsive design, adapts to system colour
theme (media query: prefers-color-theme).

This project intentionally minimises the reliance on dependencies, allowing for better
performance and long-term reliability.

The Inter typeface is self-hosted using the fontsource variable package to avoid the using
Google Fonts for privacy.

## Architecture

* **assets/css**: the main global css styles.
* **components**: reusable components.
* **composables**: custom functions with state management.
* **data**: static non-reactive data.
* **pages**: views following a url directory structure when named `*Page.vue`.
* **router**: the main page router.
* **types**: any types or interfaces.

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

* Version 6.0
  * **Updated Navigation Style**: Added Icons. New Mobile Navigation Bar.
  * **Dynamic Page Titles**:
  * **Rounded Corners**: 

![View Previous Changelogs](./VERSION.md)

## Limitations and Known Issues

* The `light-dark` css function is used (mdn: newly available).
* The `/alpha` route is not for public use (for development testing purposes).
* The Navigation Landmark is hidden until menu button is clicked on mobile.
* Cannot use arrow keys on the project filter tablist.

## Todo

* Add "Back to Top" button.
* Add Project Filter Tablist Arrow Key Navigation.
* Add Project Specific Pages.
* Add Unit Testing.
* Add About Page

## References

* Inter Font Family: <https://rsms.me/inter/>
* Inter on Fontsource: <https://fontsource.org/fonts/inter>
* CSS Reset: <https://www.joshwcomeau.com/css/custom-css-reset/>
* Tailwind v4.0 Colours (Grey and Teal, Amber 500 for Focus): <https://tailwindcss.com/docs/colors>
* ARC Toolkit: <https://www.tpgi.com/arc-platform/arc-toolkit/>
* WallpaperHub Navigation Inspiration: <https://www.wallpaperhub.app/>
* Fluent UI Inspiration: <https://fluent2.microsoft.design/>
* Material Symbols Outlined on Fontsource: <https://fontsource.org/fonts/material-symbols-outlined>
* Vue Use: <https://github.com/vueuse/vueuse>