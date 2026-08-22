# Site data

YAML files in this folder. Copy an existing entry and edit it.

## People (`people.yml`)

Photos: `assets/images/people/`. Optional hover photo: `assets/images/people/fun/`.

`publication_names` lists author strings that should count as this person on publication pages.

### Core

```yaml
- name: Name
  publication_names: [Other Author String]
  program: PhD CSE
  period: "2026-"
  website: https://...
  photo: /assets/images/people/name.jpg
  photo_fun: /assets/images/people/fun/name.png
  co_supervisor: Name
```

### Interns

Add under the matching `intern_groups` program (`PG Intern`, `UG Intern`, `SRP`, `IVISP`).

```yaml
- { name: Name, affiliation: University, period: Summer 2026 }
```

### Students as part of Coursework

Add under the matching course in `coursework_columns`. A project may have `label` and `period`.

```yaml
- { name: Name, period: Fall 2026 }
```

## Research (`research.yml`)

Homepage theme cards. `title` is the publication `tags` value. `color`: violet, orange, blue, slate, pink, teal, gold, grey. `url` is the publication permalink.

```yaml
- title: Theme Title
  description: One sentence.
  color: violet
  projects:
    - label: Short name
      url: /projects/2026-paper-name/
```

## News (`news.yml`)

Newest first. `categories` keys: `Milestones`, `Conference`, `Publications`, `Talks`, `Awards` (see `news_categories.yml`).

```yaml
- date: 2026-11-09
  title: Headline.
  categories: [Publications, Conference]
  links:
    - { label: Short name, url: /projects/2026-paper-name/ }
```

## Software (`software.yml`)

One card per tool, newest first. Teasers live in `assets/images/software/` (one image per tool, even if it started as a publication figure). Clicking the card opens `demo` when present. Buttons are `code` (GitHub, with live star count for repo URLs) and optional `package` (`label` + `url`).

```yaml
- name: Tool Name
  description: One sentence about what it does.
  image: /assets/images/software/name.png
  demo: https://...
  code: https://github.com/...
  package:
    label: npm
    url: https://www.npmjs.com/package/...
```

## Photos (`gallery.yml`)

Images: `assets/images/photos/`.

```yaml
- date: 2026-08-07
  src: /assets/images/photos/2026-08-description.png
  alt: Short alt text
  caption: Caption · Location · Mon 2026
```

## Courses (`courses.yml`)

`term_key` is `YYYYMM` for the offering.

```yaml
- code: COMP 6411D
  title: Data Visualization
  level: Postgraduate
  offerings:
    - term: Fall 2026
      term_key: 202609
      status: upcoming
      tas:
        - Name
```

## Sponsors (`sponsors.yml`)

Logos: `assets/images/sponsors/`.

```yaml
- name: Organization
  url: https://...
  logo: /assets/images/sponsors/name.png
```
