# Personal Portfolio Website

> [!NOTE]
> This website is still under construction.

## Overview

<p align="center">
  <img src="./docs/assets/ppw-preview-responsive.jpg" 
    alt="Website Running on Desktop and Mobile View">
</p>

This repository contains my personal portfolio website built with Vue.js (and TypeScript).
This space allows me to share my work, thoughts and tools.

This website prioritises simplicity, accessibility, and user experience above the latest;
but also aiming to have a timeless experience that anyone can use.

* **Simplicity**: Minimal distractions and typography.
* **Accessibility**: Following WCAG Guidelines (Constrast Ratios, Alterative Text,
ARIA Labels and Roles)
* **UX**: Intuitive interactions, responsive design and system-adaptive theme.

The live version of the site, <https://harshjayprakash.github.io>, corresponds to the main
branch.

## Architecture

The website follows a scalable folder structure as follows:

* `src/assets/css`: Global style sheets.
* `src/components`: Modular UI components.
* `src/composables`: Reusable logic.
* `src/data`: Static data.
* `src/layouts`: Layout components.
* `src/pages`: Page-specific components.
* `src/router`: Global router.
* `src/types`: Type definitions.

## Running Locally

Running the website locally is as simple as a few commands after cloning the git
repository. There are no external measures to be setup, expect Node.js version 18.3 or
higher.

```sh
# 1. Clone and Change Directory
git clone https://github.com/harshjayprakash/harshjayprakash.github.io.git
cd harshjayprakash.github.io

# 2. Install dependencies.
npm install

# 3. Run local server.
npm run dev
```

## Changelog

### Version 4006.2.0 - 12 August 2025

* Updated Projects Page Icons.
* Added Optional Headline to Projects Interface.
* Updated Focus Style.
* Rearranged Hero Section.
* Update Material Icons Imports.
* Updated Badge Highlight Variant Styling.
* Updated Footer.
* Moved Website Status to Footer.
* Updated Mobile Navigation to Show Active Page Label on Navigate.
* Fixed External Links to Open in a New Tab.
* Fixed Non Scroll Page Navigation.
* Fixed When Back to Top did not scroll to the top.
* Updated Project Data.
* Updated Node Dependencies.
* Added Hover Effects on Boxes in Hero Section.
* Updated Home About Section.
* Added Dividers.
* Added Codename "Vitriol" to Project.

> For previous version, please visit the changelog page within the wiki.

## Limitations and Known Issues

* The `light-dark` css function (mdn: baseline 2024, newly available).
* Images may take a while to load.

## References

* Inter Font Family: <https://rsms.me/inter/>
* Inter on Fontsource: <https://fontsource.org/fonts/inter>
* CSS Reset: <https://www.joshwcomeau.com/css/custom-css-reset/>
* Tailwind v4.0 Colours (Grey, Teal, Amber): <https://tailwindcss.com/docs/colors>
* ARC Toolkit: <https://www.tpgi.com/arc-platform/arc-toolkit/>
* Material Symbols Outlined on Fontsource: <https://fontsource.org/fonts/material-symbols-outlined>
* Vue Use: <https://github.com/vueuse/vueuse>
* WallpaperHub Navigation Inspiration: <https://www.wallpaperhub.app/>
* Fluent UI Component Inspiration: <https://fluent2.microsoft.design/>