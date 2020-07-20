

/*
// example of design patters code
https://github.com/bmaluijb/CloudDesignPatterns


--------------------------------------------------------------------------


Why design patterns ?
 1) these are solution to common software design problems.
 2) A common language for software professionals  ex: Retry patter, identity patter etc
 3) Template/ receipies for design solutions.

Why design patterns matter ?
 1) Identify solutions/consider all caviets
 2) Inspire design thinking
 3) Best paractices


Circuit Braker patter:
-----------------------
    Transient exceptions are those that when retried could succeed without 
    changing anything. Non-transient exceptions are those that will fail again 
    on retry until the underlying cause of the problem is corrected.
    EX: some time after refresh automatically we get response(Transient problem)
    some time network physical break or application is used by other users 
    heavily result in timeout are no-transient, means in the first case
    untill new physical n/w is created we can't get resonse

    Problems with non-transient failures:
    a) To keep retying, wasts application resources.
    b) waiting on a timeout wastes resources

    To solve above problem , we can use circut-breakersolution.
    a) Circut breaker stays in application code.
    b) During normal scenario it acts like a closed switch, so calls go t
     Api from application and viceversa
    c) one some % calls start failing, circut-breaker opens, and remain open
        till some specific time decided by application team or untill it receves
        a message from API(in a pubsub model).
    e) After the specified time, it makes call to api(Partial open) to check if the
    API is up, this can be done by appliation or thorugh helpth check process.
    f) if the above step is successfull again CB(circut-breaker) closes.


Compensating Transaction Pattern
---------------------------------

    Problems with distributed process::
        a) Reverting any problem in a distributed stytem is difficult
        b) example: in a user registration form. there are many steps
            --> enter user info in the UI form
            ---> send this data to API and create user ID.
            ---> save user info in data base.
            --> send confirmation email to user
        c) if anyone of step fails in above process, we need to identify the exact
            failure and inform to user
        e)  but to complete it after failure one or more steps need to be repeated
        (refer problem_with_DS.png image)
        
    Solution to the problem is compensating transaction.(Refer compensating_trans.png)
        it means we have to store the process in a DB and that should be accessible
        at any stage of system. It defines the steps to do for any part of process
        failure

    Things to consider
        1) this solution is specific to application, so no generalised solution
        2) The DB where we store the transaction pattern steps, should be resillient(means
            always available)
            (refer things_to_consider.png)


Health End point monitoring pattern:
-----------------------------------

    normall health mornitoring systems, just ping root of application and check
    if it available or not.
    If any of the subsytems fails these health monitoring systems couldn't catch it.
    (refer problem_with_health_monitor.png)

    Solution to the problem:
    -----------------------
    1) Create a specific end point in application, that end point calls all subsystems
    2) Monitoring tool should call this API and check the health
        (refer solution_health_monitoring.png)
    3) Also monitoring tool should do additional tasks, like checking latency, SSL etc

    Things to consider:
    a) we can have single end point that calls all susbstems.
    b) we can have mutliple end points(one for website main endpoint and others for substems)
    c) ALso need to make sure which endpoints can be exposed
    d) secure the exposed end point other wise attackers will attack system


Queue based load levelling pattern:
-----------------------------------



Data Management and Performance
-------------------------------
-------------------------------

 Automatic scaling pattern:
 -------------------------
   scaling with multiple servers with loadbalancer causes more cost to company
   and they are not useful during low traffic time.

   (refer types_scaling.png)
   scalling is 2 types
   1) Vertical scaling  -- single system, increase its power, by adding more poweful cpu
    or by more RAM or by more hard disk
   2) Horizontal scaling -- adding multiple instances
   
   (refer automatic_scaling_pattern.png)
   Automatic scaling means, automatically doing scalling based on load.
   This automatic process is either through code or setting in environment


Cache aside Patterns:
--------------------
  Having cache b/w app and storage is cache aside pattern.
  (refer )

Command and Query responsibility segregation(CQRS) pattern
*/