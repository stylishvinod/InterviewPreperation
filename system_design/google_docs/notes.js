
/*
1) Basic principle behind google docs is collaboartive editing, 
    it means same doc can be accessible and editable by many people

Issue:
-----
 issues with this process is
 a) concurrency : multiple ppl access the same doc
 b) Latency: since  it is internet domain, there might be latency

How to solve it:
---------------
    1) First we think to apply lock method: it means only one person can edit it
     but it rules out our basic requirement

   2) optimistic concurrency control:
    --------------------------------
    In this case we provide multiple copies to different people and syn their editing

    syncing is 2 types:
        a) Event passing  -- Char by char syncing
            it is also called operational transformation(OT)
            each char typed by one person is immediately transmitted to server
            and server receives it and retransmit that change to all other
            sockets using websocket
        b) Differential sync -- line by line syncing


*/