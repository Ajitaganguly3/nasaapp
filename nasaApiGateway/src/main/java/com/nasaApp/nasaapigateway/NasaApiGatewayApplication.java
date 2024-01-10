package com.nasaApp.nasaapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NasaApiGatewayApplication {

//	@Autowired
//	private Filter apiFilter;

	public static void main(String[] args) {
		SpringApplication.run(NasaApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator apiRoutes(RouteLocatorBuilder builder) {

		return builder.routes()

				.route(route -> route.path("/api/register/**").uri("lb://registration-service")).build();

	}

}
