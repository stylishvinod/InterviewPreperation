

# 1. External configuration store pattern
![](assets/EC1.png)

if application is deployed in globally different regions
![](assets/EC2.png)
![](assets/EC3.png)

![](assets/EC4.png)

## solution to the problem
![](assets/EC5.png)

## Things to consider
![](assets/EC6.png)
 1) Availablity
 2) Performance
 3) Secure
 4) Error handling

 Endpoint
  a) Scope(app, env)
  b) Format(key/value, type)
  c)Authentication

Auth system
 a) only operation team has access,
 b) Security Rules

 ## useage of pattern
 ![](assets/EC7.png)


# 2. Federated identity pattern
Problems with identity and access
![](assets/FI1.png)
![](assets/FI2.png)

## solution to the problem
![](assets/FI3.png)

## Things to consider
it is production system

# 3. Gatekeeper pattern
problems exposing cloud services to internet
![](assets/GP1.png)
a) SQL injections
b) Cross-site  scripting
c) Dos attack
d) Steal data

## solution to the problem
![](assets/GP2.png)

## Things to consider
![](assets/GP3.png)

## when to use this
![](assets/GP4.png)

# 4. Auto scaling pattern
![](assets/AS1.png)
![](assets/AS2.png)

## solution is
 scale the application
 1) Vertical scaling
 2) Horizontal scaling
 ![](assets/AS3.png)
 ![](assets/AS4.png)

 ## Things to consider
 ![](assets/AS4.png)

 ## when to use
 1) To guarantee application uptime
 2) To befit from scaling(reduce cost by scaling)
  
# 5. Cache aside pattern
![](assets/CA1.png)

## solution 
![](assets/CA2.png)

## Things to consider
![](assets/CA3.png)

# 6. Command and Query responsibility segregration(CQRS) pattern
![](assets/CQ1.png)
causes data lock and data conflicts
scalling is inefficent

## solution
![](assets/CQ2.png)

## Things to consider
Need to consieder data sync, it is causes eventual consistency
![](assets/CQ3.png)

## when to use this
![](assets/CQ4.png)

Not to use

# 7. Event sourcing pattern


# 8 Sharding pattern


# 9 static content hosting pattern