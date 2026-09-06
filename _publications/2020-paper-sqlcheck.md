---
title: "SQLCheck: Automated Detection and Diagnosis of SQL Anti-Patterns"
authors:
  - Prashanth Dintyala
  - Arpit Narechania
  - Joy Arulraj
equal_contributors:
  - Prashanth Dintyala
  - Arpit Narechania
venue: ACM SIGMOD
year: 2020
month: 6
image: /assets/images/publications/2020-sqlcheck.png
type: Conference
tags:
  - Database Systems
doi: https://doi.org/10.1145/3318464.3389754
pdf: /assets/pdfs/publications/2020-paper-sqlcheck.pdf
abstract: >-
  The emergence of database-as-a-service platforms has made deploying database applications easier than before. Now, developers can quickly create scalable applications. However, designing performant, maintainable, and accurate applications is challenging. Developers may unknowingly introduce anti-patterns in the application's SQL statements. These anti-patterns are design decisions that are intended to solve a problem, but often lead to other problems by violating fundamental design principles. In this paper, we present SQLCheck, a holistic toolchain for automatically finding and fixing anti-patterns in database applications. We introduce techniques for automatically (1) detecting anti-patterns with high precision and recall, (2) ranking the anti-patterns based on their impact on performance, maintainability, and accuracy of applications, and (3) suggesting alternative queries and changes to the database design to fix these anti-patterns. We demonstrate the prevalence of these anti-patterns in a large collection of queries and databases collected from open-source repositories. We introduce an anti-pattern detection algorithm that augments query analysis with data analysis. We present a ranking model for characterizing the impact of frequently occurring anti-patterns. We discuss how SQLCheck suggests fixes for high-impact anti-patterns using rule-based query refactoring techniques. Our experiments demonstrate that SQLCheck enables developers to create more performant, maintainable, and accurate applications.
links:
  talk:
    - url: https://youtu.be/5vHhuuPy3FI
citation_bibtex: |-
  @inproceedings{dintyala2020sqlcheck,
      author = {Dintyala, Prashanth and Narechania, Arpit and Arulraj, Joy},
      title = {{SQLCheck: Automated Detection and Diagnosis of SQL Anti-Patterns}},
      year = {2020},
      isbn = {9781450367356},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3318464.3389754},
      doi = {10.1145/3318464.3389754},
      booktitle = {Proceedings of the 2020 ACM SIGMOD International Conference on Management of Data},
      pages = {2331–2345},
      numpages = {15},
      location = {Portland, OR, USA},
      series = {SIGMOD '20}
    }
citation_apa: |-
  Dintyala, P., Narechania, A., & Arulraj, J. (2020). SQLCheck: Automated Detection and Diagnosis of SQL Anti-Patterns. In Proceedings of the 2020 ACM SIGMOD International Conference on Management of Data (SIGMOD '20) (pp. 2331–2345). Association for Computing Machinery. https://doi.org/10.1145/3318464.3389754
---
