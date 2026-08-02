# DataVisards

Website for the DataVisards lab at HKUST: [datavisards.com](https://datavisards.com).

## Develop

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000>. Pushes to `main` deploy through GitHub Pages.

## Update content

- Core members: `_people/*.md`; photos: `assets/images/people/`
- Interns and coursework students: `_data/students.yml`
- Publications: `_publications/*.md`; images: `assets/images/publications/`; PDFs: `assets/pdfs/`
- Research themes and homepage projects: `_data/research.yml`
- News: `_data/news.yml`; categories: `_data/news_categories.yml`
- Photos: `_data/gallery.yml`; images: `assets/images/photos/`
- Courses: `_data/courses.yml`
- Sponsors: `_data/sponsors.yml`; logos: `assets/images/sponsors/`

## Conventions

- Publication `tags` must match theme titles in `_data/research.yml`.
- News categories must match keys in `_data/news_categories.yml`.
- Do not add Jekyll `date` front matter to publications; use `year`.