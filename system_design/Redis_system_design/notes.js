/*
Redis system design:

it is mostly used in cache layer like a RAM

Caching best practices:
---------------------
1) Validity of data: to say how much time it has to presen in cache
2) High hit rate :  we can store in general 20% of most used data in cache and
    that data is store in LRU (least recent used) format.
3) cachemiss : it means most of data is not present in cache and need to do actual
    data base query
4) TTL : actaul DB query


  API  --- > Cache   -->  DB

Cache access patterns:
---------------------
1) Write through:  it means every wrtie first performs in cache later in DB, once
    DB update also completes successful then only it return the callback
2) write around:  First it updates the DB and ack will be sent back. Only when
    there is read req, it checks in cache and cahce miss happens, so it calls DB
    and saves a copy in cache
3) write back: In this case data is saved in cache and ack wil be returned.
    There is a async service that sync data b/w cache and DB

Eviction policy:
---------------
It means when cachel is full, we have to deplete some data, this delete process
is called eviction.

Ideally LRU (least recently used) polict is common practice.

To design cache we need
 a) hash table
 b) bi directional linked list(to identify LRU process)

Internals of Cache system:
----------------------------
    (Refer img)

Persistent or Fault tolerent:
--------------
    whar happen if some reasons if system restarts ideally all data in Ram resets
    Thats why RAM is volatile.
    What to do in these cases and how to get data back

  1) Regular interval snapshot
  2) Log reconstruction
    In this process, what ever the operation (read ow write) happens on cache,
    those sequence is stored in a log fie and that file is saved in hard disk.
    For any issues, there is mechanism to read this log file and reconstruct
    the hash table in cache

Availability:
-------------
 keeping replica of same servers, if one server is down, call will not go to DB,
 it gets data from replica server
*/