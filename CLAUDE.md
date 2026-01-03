# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and CV website built with 11ty (Eleventy) static site generator. Content is primarily in Hungarian.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with live reload)
npm run dev
# Visit http://localhost:8080

# Build for production
npm run build

# Clean build output
npm run clean
```

## Project Structure

```
src/
  _includes/
    layouts/
      base.njk          # Base layout with nav and footer
      post.njk          # Blog post layout (extends base)
  posts/
    *.md                # Blog posts (markdown files)
  css/
    style.css           # All styles
  index.njk             # Homepage (lists blog posts)
  about.md              # About page
  cv.md                 # CV page

_site/                  # Built output (git ignored)
.eleventy.js            # 11ty configuration
```

## Adding New Blog Posts

Create a new markdown file in `src/posts/` with this frontmatter:

```markdown
---
layout: layouts/post.njk
title: Your Post Title
date: YYYY-MM-DD
---

Your content here in Markdown...
```

File naming convention: `YYYY-MM-DD-slug.md` (e.g., `2026-01-15-my-post.md`)

Posts automatically:
- Appear on homepage in reverse chronological order
- Generate individual post pages
- Support full Markdown syntax

## Architecture Notes

### Templating
- Uses Nunjucks (.njk) for layouts and dynamic pages
- Markdown (.md) for content pages and blog posts
- Collections API auto-generates post list from `src/posts/*.md` (configured in .eleventy.js:10)

### Styling
- Single CSS file at `src/css/style.css`
- CSS variables for theming (defined in :root)
- Responsive design with mobile breakpoint at 600px

### Date Handling
- Custom `readableDate` filter formats dates in Hungarian locale (configured in .eleventy.js:16)
- Posts sorted by date descending (configured in .eleventy.js:11)

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch:
- Workflow: `.github/workflows/static.yml`
- Builds with Node.js 20
- Deploys `_site/` directory contents

## Content Language

Site content is in Hungarian. Maintain Hungarian when editing or adding content unless specifically requested otherwise.
