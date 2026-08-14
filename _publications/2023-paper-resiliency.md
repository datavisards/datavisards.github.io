---
title: "Resiliency: A Consensus Data Binning Method"
authors:
  - Arpit Narechania
  - Alex Endert
  - Clio Andris
venue: GIScience
year: 2023
month: 9
image: /assets/images/publications/2023-resiliency.jpg
type: Short paper
tags:
  - "Cartography & GIS"
doi: https://doi.org/10.4230/LIPIcs.GIScience.2023.55
pdf: /assets/pdfs/publications/2023-paper-resiliency.pdf
abstract: >-
  Data binning, or data classification, involves grouping quantitative data points into bins (or classes) to represent spatial patterns and show variation in choropleth maps. There are many methods for binning data (e.g., natural breaks, quantile) that may make the same data appear very different on a map. Some of these methods may be more or less appropriate for certain types of data distributions and map purposes. Thus, when designing a map, novice users may be overwhelmed by the number of choices for binning methods and experts may find comparing results from different binning methods challenging. We present resiliency, a new data binning method that assigns areal units to their most agreed-upon, consensus bin as it persists across multiple chosen binning methods. We show how this "smart average" can effectively communicate spatial patterns that are agreed-upon across binning methods. We also measure the variety of bins a single areal unit can be placed in under different binning methods showing fuzziness and uncertainty on a map. We implement resiliency and other binning methods via an open-source JavaScript library, BinGuru.
links:
  slides:
    - url: /assets/pdfs/slides/2023-slides-resiliency.pdf
  demo:
    - label: Resiliency demo
      url: https://exploropleth.github.io/resiliency-app
    - label: BinGuru demo
      url: https://observablehq.com/@arpitnarechania/binguru-demo
  code:
    - url: https://github.com/exploropleth/binguru
  npm:
    - url: https://www.npmjs.com/package/binguru
citation: |-
  @InProceedings{narechania2023resiliency,
      author =	{Narechania, Arpit and Endert, Alex and Andris, Clio},
      title =	{{Resiliency: A Consensus Data Binning Method}},
      booktitle =	{12th International Conference on Geographic Information Science (GIScience 2023)},
      pages =	{55:1--55:7},
      series =	{Leibniz International Proceedings in Informatics (LIPIcs)},
      ISBN =	{978-3-95977-288-4},
      ISSN =	{1868-8969},
      year =	{2023},
      volume =	{277},
      editor =	{Beecham, Roger and Long, Jed A. and Smith, Dianna and Zhao, Qunshan and Wise, Sarah},
      publisher =	{Schloss Dagstuhl -- Leibniz-Zentrum f{\"u}r Informatik},
      address =	{Dagstuhl, Germany},
      URL =		{https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.GIScience.2023.55},
      URN =		{urn:nbn:de:0030-drops-189509},
      doi =		{10.4230/LIPIcs.GIScience.2023.55}
  }
---
