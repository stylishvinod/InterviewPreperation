
# Why design patterns ?
 1) these are solution to common software design problems.
 2) A common language for software professionals  ex: Retry patter, identity patter etc
 3) Template/ receipies for design solutions.

# Why design patterns matter ?
![](assets/whyPatterns.png)
 1) Identify solutions/consider all caviets
 2) Inspire design thinking
 3) Best paractices

 ![](assets/design_patterns1.png)


 # Resiliency patterns

 Resiliency is the ability of a system to gracefully handle and recover from failures

 # 1. Circut breaker pattern
![](assets/non_tran_1.png)

    Transient exceptions are those that when retried could succeed without 
    changing anything. 

    Non-transient exceptions are those that will fail again 
    on retry until the underlying cause of the problem is corrected.

    EX: some time after refresh automatically we get response(Transient problem)
    some time network physical break or application is used by other users 
    heavily result in timeout are no-transient, means in the first case
    untill new physical n/w is created we can't get response

## Problems with non-transient failures:
![](assets/non_tran_3.png)
    a) To keep retying, wastes application resources.
    b) waiting on a timeout wastes resources

## To solve above problem , we can use circut-breaker solution.
![](assets/circut_breaker.png)
    a) Circut breaker stays in application code.
    b) During normal scenario it acts like a closed switch, so calls go t
     Api from application and viceversa
    c) one some % calls start failing, circut-breaker opens, and remain open
        till some specific time decided by application team or untill it receves
        a message from API(in a pubsub model).
    e) After the specified time, it makes call to api(Partial open) to check if the
    API is up, this can be done by appliation or thorugh helpth check process.
    f) if the above step is successfull again CB(circut-breaker) closes.

![](assets/circut_brk_2.png)

## Things to consider
![](assets/circuit_brk_3.png)


# 2. Comensating Transaction Pattern
1) Modern application consists of distributed process.
![](assets/DP_1.png)

![](assets/DP_2.png)

## Solution to problem
![](assets/DP_3.png)

## Things to consider
![](assets/DP_4.png)


# 3. Health End Point Monitoring Pattern
![](assets/HM_1.png)
- General health moniroing systems monitor health of main application. by pinging root URL
- But this systme might be connected to couple of other sub systems like DB, DW etc,
- If one of the connected system fails, still our HM systme shows as our system 
    is working fine

## problem with  HM systems
![](assets/HM_2.png)

## Solution to problem
![](assets/HM_3.png)
- It has 2 parts
- Health endpoint URL (Providing)
- Monitoring system(Analyzing)

## Things to consider
![](assets/HM_4.png)
![](assets/HM_5.png)
- we have to make sure, application performance is not reduced to Health endpoint
- End point need to be secured, otherwise attackers can use this
![](assets/HM_6.png)


# 4. Queue based load leveling Pattern
- Many time we applications call its own services(backend) or 3rd party servcices.
- if the service is called directly, if application load increases suddenly
 service migh fail.
- adding load balancer pattern might solve, but how much scaling you can apply on
 a variable load
## problem with calling services directly
![](assets/QB_1.png)

## Solution to problem
![](assets/QB_2.png)

## Things to consider
![](assets/QB_3.png)

## Usage of pattern
- when feel service is overloadded and cost matters.
 When not to use this pattern ?
- If the application needs immediate respoinse form API(Not async)

# 5. Retry Pattern

Transient faults are faults that are ofter temporary in nature.
- some times services are present in geo graphically in a different position
- like tempotary network failure
- service restart

## Solution to problem
![](assets/RT_1.png)

Different stratagies 
- Retry fixed number of times
- Incremental backoff period - means retry after certain amount of time like every 3, 6, 9 etc sec

## Things to consider
![](assets/RT_2.png)

## Usage of pattern
- Only for transient failures
- don't use for non transient failures

# 6. Throttling pattern
problem with unpredictable traffic
![](assets/TH_1.png)
- if API is shareby different applications
- And one Tenent uses more, then it might cause timout or other issues
 to other tenents

 ## Solution to problem
![](assets/TH_2.png)
- In this pattern the throttle ssytem can take below action on the tenent, whose traffic increases suddely.
 1) Allowing only some amount of traffic
 2) Disconnect the spike tenent to serve others
 3) In case 2. Throttling layer sends specific msg to uses of that tenent

 ## Things to consider
 ![](assets/TH_3.png)

 ## Usage of pattern
 ![](assets/TH_4.png)