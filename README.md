# Kingad — UI/UX Designer Portfolio

Personal portfolio site for **Agwu Kingsley Daberachukwu (Kingad)**, a UI/UX and Product Designer based in Lagos, Nigeria, working across web3, cybersecurity, healthcare, fintech, real estate, and agritech.

**Live site:** [kingad42.github.io/KingsleyAd](https://kingad42.github.io/KingsleyAd/)

## About

This is a static, single-page portfolio built with plain HTML, CSS, and JavaScript — no framework, no build step. Each featured project has its own dedicated **design system page**, breaking down the color palette, typography, and UI components used, alongside a short case study of the problem and approach.

## Project structure

```
├── index.html                      # Main portfolio page
├── styles.css                      # Global styles for index.html
├── script.js                       # Scroll animations, modals, case study logic
│
├── farm-design-system.html         # One Acre Farm — design system & case study
├── protecx-design-system.html      # ProtecX — design system & case study
├── reddington-design-system.html   # Reddington Hospital — design system & case study
├── bba-design-system.html          # Business Bee Africa — design system & case study
│
├── one acre main.html              # One Acre Farm — full live design
├── protecx.html                    # ProtecX — full live design
├── protecx .png                    # ProtecX thumbnail
├── bba-thumb.png                   # Business Bee Africa card thumbnail
├── bba-landing.png                 # Business Bee Africa full landing screenshot
│
└── README.md
```

> Reddington Hospital's full live design is embedded directly inside `script.js` and opens in a modal preview on the main page — it doesn't have a separate HTML file.

## Featured projects

| Project | Category | Description |
|---|---|---|
| **One Acre Farm** | UI/UX Design · Development | Farm-to-table marketplace connecting local farmers with households |
| **ProtecX** | UI/UX Design · Development | Cybersecurity marketplace connecting businesses with vetted security experts |
| **Reddington Hospital** | UI/UX Design · Development | Healthcare website redesign focused on patient booking and trust |
| **Business Bee Africa** | UI/UX Design | Startup intelligence directory for Africa's tech ecosystem |

## Running locally

This is a static site — no build tools or dependencies required. Serve it with any local static server so relative paths and fonts load correctly (don't just double-click `index.html`, since some tools like Live Server can misbehave — see note below).

```bash
# Option 1: Python
python3 -m http.server 5500

# Option 2: Node (npx)
npx serve .
```

Then open `http://localhost:5500` (or whichever port is shown) in your browser.

> **Note on VS Code Live Server:** `script.js` contains a full embedded copy of the Reddington Hospital site (used for the "View Live Preview" modal), which includes its own `</body>` tag as plain text inside a JavaScript string. Live Server's auto-reload injection can occasionally get confused by this. If you hit issues, prefer `python -m http.server` or `npx serve` instead.

## Tech stack

- HTML5 / CSS3 / vanilla JavaScript
- Google Fonts: Clash Display, Syne, DM Sans, Playfair Display, JetBrains Mono (varies per project)
- No frameworks, no build step — deploys as-is via GitHub Pages

## Deployment

The site is deployed via **GitHub Pages** from the repository root. Any push to the default branch updates the live site automatically within about a minute.

## Contact

Built and maintained by Kingsley. For inquiries, reach out via the contact section on the [live site](https://kingad42.github.io/KingsleyAd/).
