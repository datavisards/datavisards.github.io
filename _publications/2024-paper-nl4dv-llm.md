---
title: "Generating Analytic Specifications for Data Visualization from Natural Language Queries using Large Language Models"
authors:
  - Subham Sah
  - Rishab Mitra
  - Arpit Narechania
  - Alex Endert
  - John Stasko
  - Wenwen Dou
equal_contributors:
  - Subham Sah
  - Rishab Mitra
  - Arpit Narechania
venue: NLVIZ Workshop (IEEE VIS)
year: 2024
month: 10
image: /assets/images/publications/2024-nl4dv-llm.png
type: Workshop
tags:
  - "Natural & Explainable Interfaces"
pdf: /assets/pdfs/publications/2024-paper-nl4dv-llm.pdf
abstract: >-
  Recently, large language models (LLMs) have shown great promise in translating natural language (NL) queries into visualizations, but their "black-box" nature often limits explainability and debuggability. In response, we present a comprehensive text prompt that, given a tabular dataset and an NL query about the dataset, generates an analytic specification including (detected) data attributes, (inferred) analytic tasks, and (recommended) visualizations. This specification captures key aspects of the query translation process, affording both explainability and debuggability. For instance, it provides mappings from the detected entities to the corresponding phrases in the input query, as well as the specific visual design principles that determined the visualization recommendations. Moreover, unlike prior LLM-based approaches, our prompt supports conversational interaction and ambiguity detection capabilities. In this paper, we detail the iterative process of curating our prompt, present a preliminary performance evaluation using GPT-4, and discuss the strengths and limitations of LLMs at various stages of query translation. The prompt is open-source and integrated into NL4DV, a popular Python-based natural language toolkit for visualization, which can be accessed at https://nl4dv.github.io.
links:
  video:
    - url: https://youtu.be/3YxloJgnV9I
  talk:
    - url: https://youtu.be/f1qHECiyIfs
  slides:
    - url: /assets/pdfs/slides/2024-slides-nl4dv-llm.pdf
  demo:
    - url: https://nl4dv-14924aab225c.herokuapp.com/
  pypi:
    - url: https://pypi.org/project/nl4dv/3.0.0/
  website:
    - url: https://nl4dv.github.io/
citation: |-
  @misc{sah2024nl4dvllm,
      author = {Subham Sah and Rishab Mitra and Arpit Narechania and Alex Endert and John Stasko and Wenwen Dou},
      title = {{Generating Analytic Specifications for Data Visualization from Natural Language Queries using Large Language Models}},
      year = {2024},
      eprint = {2408.13391},
      archivePrefix = {arXiv},
      primaryClass = {cs.HC},
      url = {https://arxiv.org/abs/2408.13391},
      howpublished = {Presented at the NLVIZ Workshop, IEEE VIS 2024}
  }
---
