/*
1) Kafka is a messaging system.

Main components:
 1) kakfa broker
 2) Producer
 3) Broker

 producer - >  kafka broker  - > broker

 Kafka broker
 -----------
  it contains topics, topic means some specific content.

  Publishers pblish to topic.  ex: user topic: publisher publishes names to topics.
  -> if for a single topic, if data increses, we have to partition the data of that topic
  -> partiton may be shardding

Queue Vs pubsub
----------------
Queue: message published once and consumed once.

consumer groups allow both queue and pub/sub behaviour





*/