# Personal Blog & CV

A clean, modern personal website built with [11ty (Eleventy)](https://www.11ty.dev/) - a simple, powerful static site generator.

## Features

- **Simple Blog System**: Write posts in Markdown
- **Three Main Pages**: Home (with blog posts), About Me, and CV
- **Automatic Deployment**: Pushes to `main` branch deploy to GitHub Pages
- **Fast & Lightweight**: Static HTML, no runtime dependencies
- **Responsive Design**: Works great on mobile and desktop

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with live reload:

```bash
npm run dev
```

Visit `http://localhost:8080` in your browser. The site will automatically refresh when you make changes.

### Building for Production

```bash
npm run build
```

This creates the production-ready site in the `_site/` directory.

## Adding Blog Posts

Creating a new blog post is easy:

1. Create a new `.md` file in `src/posts/`
2. Name it with the date and a slug: `YYYY-MM-DD-my-post-title.md`
3. Add frontmatter and content:

```markdown
---
layout: layouts/post.njk
title: My Awesome Post
date: 2026-01-15
---

Your blog post content here using **Markdown**!

## Subheadings work great

- Lists
- Are
- Supported

[Links too](https://example.com)!
```

4. Save the file - it will automatically appear on your homepage

## Editing Pages

- **Homepage**: Edit `src/index.njk`
- **About Page**: Edit `src/about.md`
- **CV Page**: Edit `src/cv.md`

## Customizing Styles

All styles are in `src/css/style.css`. The CSS uses variables for easy theming:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --link-color: #3498db;
  /* etc. */
}
```

Change these to customize the color scheme.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The workflow is defined in `.github/workflows/static.yml`.

Make sure GitHub Pages is enabled in your repository settings and set to deploy from GitHub Actions.

## Project Structure

```
src/
├── _includes/
│   └── layouts/
│       ├── base.njk       # Base layout (header, nav, footer)
│       └── post.njk       # Blog post layout
├── posts/                 # Your blog posts (.md files)
├── css/
│   └── style.css          # All site styles
├── index.njk              # Homepage
├── about.md               # About page
└── cv.md                  # CV page

_site/                     # Generated site (don't edit)
.eleventy.js               # 11ty configuration
```

## Learn More

- [11ty Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Template Syntax](https://mozilla.github.io/nunjucks/templating.html)
- [Markdown Guide](https://www.markdownguide.org/)

## License

MIT
