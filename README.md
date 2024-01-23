**NASA APP**


Develop a NASA Astronomy Picture Of the Day (APOD) Application that allows users to search for Astronomy picture, and save pictures to favorites/wishlist.
The application needs to fetch Astronomy picture by registering with the following API and get API Key required to call the API.
https://api.nasa.gov/


**COMPONENTS BUILD IN BACKEND (SPRING BOOT):**

1. **Microservices**:
    
    - Registration
    - Login
    - APOD (Third Party URL)  
    - Wishlist 
    - Eureka Service
    - API Gateway
    - Config Server

2. **JWT Token Creation**  (Login MS)
3. **JWT Token Validation** (API Gateway MS)
4. **Custom Responses**
5. **Spring Security** (Login MS)
6. **Custom Exceptions**
7. **Global Exception Handler** (Registration MS)
8. **Microservice Communication** (Rest Template -- Login MS and APOD MS)
9. **Kafka** 
    
    - Registration MS (Producer)
    - Login MS (Producer and Consumer)
    - APOD MS (Consumer)

10. **Testing** (Jacoco)
11. **Swagger** (All MS)
12. **Logging**
    
    - Logger
    - slf4j
    - sysout
13. **Tracing** (Zipkin)
14. **Circuit Breaker** (Login MS)
15. **Caching** (EH Cache) (Wishlist MS)



