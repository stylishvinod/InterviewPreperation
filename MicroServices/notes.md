# Micro services

Disadvantages of Monolitic architecture
![](assets/MS1.png)

-> Function decomposition is the technique to break the existing app into small applications
ex: eCommerce
![](assets/MS2.png)

## API Gateway

## service registry

it is a DB or API stores all Micro services instances IP address, if either client or API gate way want to talk to any service, it get details from service registry

## Service Discovery:
    accessing info in registry
    ![](assets/MS3.png)

## Communication b/w micro service
- synchronous
- Async

## Sync
through http or grpc calling one after another micro service.
-   advantages
    -   Easy
    -   Realtime response
-   Disadvantages
    -   Service availablity
    -   Response time
## Async intercommunication pattern
-   Saga pattern

## Circuit breaking

## Service mesh

![](assets/MS4.png)