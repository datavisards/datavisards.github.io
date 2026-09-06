# Publications

1. Add `{year}-{kind}-{name}.md` here. `kind` is `paper`, `poster`, `patent`, `dissertation`, or `dataset`. The stem must match the primary PDF filename.
2. Add the teaser, PDF, and any slides or extra PDFs.
3. If the work has a research theme, add it under that theme in [`_data/research.yml`](../_data/research.yml).
4. Permalink is `/projects/{year}-{kind}-{name}/`.

## Files

| Asset | Path |
| --- | --- |
| Markdown | `_publications/{year}-{kind}-{name}.md` |
| Teaser | `assets/images/publications/{year}-{name}.{ext}` |
| PDF | `assets/pdfs/publications/{year}-{kind}-{name}.pdf` |
| Slides | `assets/pdfs/slides/{year}-slides-{name}.pdf` |

Do not set Jekyll `date`. Use `year` and `month`.

`tags` must match a theme `title` in `_data/research.yml`.

## Front matter

Field order: `title`, `authors`, `equal_contributors`, `venue`, `year`, `month`, `image`, `type`, `tags`, `recognitions`, `doi`, `pdf`, `abstract`, `links`, `citation_bibtex`, `citation_apa`.

Optional: `equal_contributors`, `tags`, `recognitions`, `doi`, `pdf`, `links`. Omit unused optional fields.

`citation_bibtex` is the BibTeX record. `citation_apa` is the APA string derived from that record (full venue name, volume, pages).

`type`: Journal, Conference, Short paper, Workshop, Demo, Poster, Preprint, Dissertation, Dataset, Patent.

`links` keys: `video`, `talk`, `slides`, `poster`, `demo`, `dataset`, `code`, `npm`, `pypi`, `website`, `system`, `vscode`, `media`. Each value is a list of `{url}` maps. Add `label` when one key has several URLs.

```md
---
title: "Paper title"
authors:
  - First Author
  - Second Author
equal_contributors:
  - First Author
  - Second Author
venue: IEEE TVCG
year: 2026
month: 1
image: /assets/images/publications/2026-name.png
type: Journal
tags:
  - "Guidance & Analytic Provenance"
recognitions:
  - label: Best Paper
    url: https://example.com/award
doi: https://doi.org/10.xxxx/xxxxx
pdf: /assets/pdfs/publications/2026-paper-name.pdf
abstract: >-
  Abstract text.
links:
  video:
    - url: https://youtu.be/...
  demo:
    - label: Demo A
      url: https://...
    - label: Demo B
      url: https://...
  code:
    - url: https://github.com/...
citation_bibtex: |-
  @article{key,
    author = {...},
    title = {{Paper title}},
    year = {2026}
  }
citation_apa: |-
  Author, A. A., & Author, B. B. (2026). Paper title. IEEE Transactions on Visualization and Computer Graphics, 32(1), 1–10. https://doi.org/10.xxxx/xxxxx
---
```
