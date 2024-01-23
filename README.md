
NASA APP


Develop a NASA Astronomy Picture Of the Day (APOD) Application that allows users to search for Astronomy picture, and save pictures to favorites/wishlist.
The application needs to fetch Astronomy picture by registering with the following API and get API Key required to call the API.
https://api.nasa.gov/


COMPONENTS BUILD IN BACKEND (SPRING BOOT):

1. Microservices:
    a) Registration
    b) Login
    c) APOD (Third Party URL)
    d) Wishlist
    e) Eureka Service
    f) API Gateway
    g) Config Server
2. Custom Response
3. Custom Exceptions
4. Global Exception Handler (Registration MS)
5. Microservice Communication (Rest Template -- Login MS and APOD MS)
6. Kafka 
    a) Registration MS (Producer)
    b) Login MS (Producer and Consumer)
    c) APOD MS (Consumer)
7. Testing (Jacoco)
8. Swagger (All MS)
9. Logging
    a) Logger
    b) slf4j
    c) sysout
10. Tracing (Zipkin)
11. Circuit Breaker (Login MS)
12. Caching (EH Cache) (Wishlist MS)


