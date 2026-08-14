---
title: "Interactive Demonstration of SQLCHECK"
authors:
  - Arthita Ghosh
  - Deven Bansod
  - Arpit Narechania
  - Prashant Dintyala
  - Su Timurturkan
  - Joy Arulraj
equal_contributors:
  - Arthita Ghosh
  - Deven Bansod
venue: PVLDB
year: 2021
month: 7
image: /assets/images/publications/2021-sqlcheck-demo.png
type: Demo
tags:
  - Database Systems
doi: https://doi.org/10.14778/3476311.3476343
pdf: /assets/pdfs/publications/2021-paper-sqlcheck-demo.pdf
abstract: >-
  We will demonstrate a prototype of sqlcheck, a holistic toolchain for automatically finding and fixing anti-patterns in database applications. The advent of modern database-as-a-service platforms has made it easy for developers to quickly create scalable applications. However, it is still challenging for developers to design performant, maintainable, and accurate applications. This is because developers may unknowingly introduce anti-patterns in the application's SQL statements. These anti-patterns are design decisions that are intended to solve a problem, but often lead to other problems by violating fundamental design principles. Sqlcheck leverages techniques for automatically: (1) detecting anti-patterns with high accuracy, (2) ranking them based on their impact on performance, maintainability, and accuracy of applications, and (3) suggesting alternative queries and changes to the database design to fix these anti-patterns. We will demonstrate that sqlcheck enables developers to create more performant, maintainable, and accurate applications. We will show the prevalence of these anti-patterns in a large collection of queries and databases collected from open-source repositories.
links:
  vscode:
    - url: https://marketplace.visualstudio.com/items?itemName=georgiatechdb.sqlcheck
citation: |-
  @article{ghosh2021sqlcheckdemo,
      author = {Ghosh, Arthita and Bansod, Deven and Narechania, Arpit and Dintyala, Prashanth and Timurturkan, Su and Arulraj, Joy},
      title = {{Interactive demonstration of SQLCheck}},
      year = {2021},
      issue_date = {July 2021},
      publisher = {VLDB Endowment},
      volume = {14},
      number = {12},
      issn = {2150-8097},
      url = {https://doi.org/10.14778/3476311.3476343},
      doi = {10.14778/3476311.3476343},
      journal = {Proc. VLDB Endow.},
      month = jul,
      pages = {2779–2782},
      numpages = {4}}
---
