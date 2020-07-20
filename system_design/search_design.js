/*
Search problem design
--------------------

1) Ask functional requirements:
-------------------------------
given a serch string of terms, return all documents that contain all the terms
in the string
Relevance does not matter
Ranking does not matter
Read only set
Documents in order of multi billions to trillions

2) Identify Micro services:
----------------------------
micro service is set of 3 parts
  a) Application tier
  b) Cache Tier
  c) storage tier

  cache and storage share same data model and APIs

*/