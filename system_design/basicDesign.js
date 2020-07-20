

/*

Sundar pre class:

Main key items that lead to distributed system:
1) Parallel requests
2) Geo locations
3) Data size limitation
4) single point of failure
5) server hotspot
6) data hotspot: Mutilple conccurent req trying to read or write same peace of data.

Building blocks to solve above problems

1) Set of app servers behind load balancer. it solves 1, 4, 5.(above points)
2) Data Replication. keep the same copies in multiple DBs. Can be setup
  either geographically near or farther.  it solves 1, 2, 4
3) Data shadding.
    a) Replication is duplicate entire DB.
    b) shadding is partitoning data into couple of sets
    c) Horizontal partition/shadding or vertical partitioning/shadding.
    d) it solved 3, 1, 6*
4) Caching. App level caching. it solve 6,(read hotspot), 1, 2

---------------------------------------------------------------------------
Microservice design pattern
---------------------------
 App Tier -> Cache Tier  -> storage tier


Logical & physical storage
-------------------------
Logical storage:
 a) Relational : Tables and columns  - SQL
 b) KVP(key value pair) - NoSQL - 
 c) Graph DB

Physical schema:
 a) Row major schema  - RDMS - here each record is stores one by one in a row format
    ex:  record1 - record2 - record3
    it is not much convenient to calculate max, min or any specific column
    based operations
 b) column major schema
    1) here we group actual record to multiple columns and store thore cols
    ex: actual record1:  id, name, age, jobTitle.
    we can group id and job title as one column and store that dat
    ex:  id1-jobtitle1-id2-jobtitle2
    Note: In physical store data is stored inRow wise only, 

Indexing
----------
1) Hash indexing
    In this approach we create a separe hash table and store the each key and
    index where that key starts.
    Need to identify the data element uniquely.
    Means if we setup index, we can't duplicate data for that field

2) B-tree indexing
    a) This is range based retrival
3) Combinations

Sharding:
--------
 Goals:
 a) Even distribution of data
 b) Add new shards
 c) if shards are not available

 1) Simple sharding:
  a) fix 'n' shards
  b) we can get offset of record ex for userid:   userid % n, gives in which
    shard that recrod need to go.
  
    Issues with this approach::
    a) we can easily even distribute the data
    b) but adding new shards is problem, because when we add new shard 'n' value
        changes and need to rearrage the4 whole data
    c) if one shard is not availble, data won't be served

 2) Consistent hasing:


Replication
-----------
it is keeping multiple copies of same day at different locations or same locations.
   Eventual consistent - it means all, data is not replicated in all DB at same time
Normally they kkep change log, that contains data and UTC time stamp,
so whenever it go to other db for replication it compares the timestamp and updates
the latest data as per ts.

COnsistency and availability at application layer
    to achieve consistencty it has to do quorum reads/quorum writes
    R + w > replicas
CAP Theorem:(consistency, Availability and partition tolerance)
-----------
Tradoff between consistency and availability in the presence of partitions.


Caching
-------
    how to choose cache
    1) What is stored -- Type of data structure
    2) Size -- ideally 10 to 20 % of the main storage
    3) Type of Cache  
      a) write through  -- app -> cache -> DB
          if only one system it works not for distributed.
      b) write around   -- 
        during write   app -> db -> cache
        during read    app -> cache -> db
      c) write later  app - cache - db
    4) Physical topology
        a) shardding
        b)  replication or copies
          1)  Dedicated 2) In app servers

DB Comparision
-------------



  -----------------------------------------------------------------------------
   Thought Process
   --------------
1) Functional requirement(features)
2) Identify set of  micro services covering all requirement.
3) Each micro service is 3 tiers(parts)
    a) App tier  
    b) Cache Tier 
    c) storage Tier
4) Identify the data model

QUestions for distributed(Why distributed)
1)Storage scale out
2) Throughput scale out
3) Availablity
4) Geo location based distributed
5) Reduction of latency


General Template for design question:
-------------------------------------
1) first design it as if it is a single system
2) Data Model and APIs
3) Why distributed
    --Generic Architecture
    --Data distribution/sharding + APIs
4)Replication
5)Consistency

Throughput:

assume app -> takes x-milli sec per operation
that is  1000/x  ops/s
assume that is 100 operations per sec  i.e   100,000/x  ops/s
normally only 30% of CPU is used to avoid overloading  i.e    30,000/x  ops/s
ideally 3,000 ops/s is good.





-----------------------------------------------------------------------

Qu:
when we say distributed or exxtend micro services, is it like scaling only
app tier or only memory tier or only storeage tier-- if yes is it horizontal scale?
if not then that is veritcal scale?

2) Data base design means both cache tier design and store tier design ?
3) one single quore handles how many conccurent req ?
4) Proxy forward and reverse proxy

*/