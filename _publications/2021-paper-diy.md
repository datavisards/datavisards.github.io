---
title: "DIY: Helping People Assess the Correctness of Natural Language to SQL Systems"
authors:
  - Arpit Narechania
  - Adam Fourney
  - Bongshin Lee
  - Gonzalo Ramos
venue: ACM IUI
year: 2021
month: 4
image: /assets/images/publications/2021-diy.png
type: Conference
tags:
  - "Natural & Explainable Interfaces"
recognitions:
  - label: Patent
doi: https://doi.org/10.1145/3397481.3450667
pdf: /assets/pdfs/publications/2021-paper-diy.pdf
abstract: >-
  Designing natural language interfaces for querying databases remains an important goal pursued by researchers in natural language processing, databases, and HCI. These systems receive natural language as input, translate it into a formal database query, and execute the query to compute a result. Because the responses from these systems are not always correct, it is important to provide people with mechanisms to assess the correctness of the generated query and computed result. However, this assessment can be challenging for people who lack expertise in query languages. We present Debug-It-Yourself (DIY), an interactive technique that enables users to assess the responses from a state-of-the-art natural language to SQL (NL2SQL) system for correctness and, if possible, fix errors. DIY provides users with a sandbox where they can interact with (1) the mappings between the question and the generated query, (2) a small-but-relevant subset of the underlying database, and (3) a multi-modal explanation of the generated query. End-users can then employ a back-of-the-envelope calculation debugging strategy to evaluate the system’s response. Through an exploratory study with 12 users, we investigate how DIY helps users assess the correctness of the system’s answers and detect & fix errors. Our observations reveal the benefits of DIY while providing insights about end-user debugging strategies and underscore opportunities for further improving the user experience.
links:
  video:
    - url: https://youtu.be/G4SCSMGvw0Y
  talk:
    - url: https://youtu.be/itbddlIX_sA
  slides:
    - url: /assets/pdfs/slides/2021-slides-diy.pdf
citation_bibtex: |-
  @article{narechania2021diy,
      author = {Narechania, Arpit and Fourney, Adam and Lee, Bongshin and Ramos, Gonzalo},
      title = {{DIY: Assessing the Correctness of Natural Language to SQL Systems}},
      year = {2021},
      isbn = {9781450380171},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3397481.3450667},
      doi = {10.1145/3397481.3450667},
      booktitle = {Proceedings of the 26th International Conference on Intelligent User Interfaces},
      pages = {597–607},
      numpages = {11},
      location = {College Station, TX, USA},
      series = {IUI '21}
  }
citation_apa: |-
  Narechania, A., Fourney, A., Lee, B., & Ramos, G. (2021). DIY: Assessing the Correctness of Natural Language to SQL Systems. In Proceedings of the 26th International Conference on Intelligent User Interfaces (IUI '21) (pp. 597–607). Association for Computing Machinery. https://doi.org/10.1145/3397481.3450667
---
