package com.nasaApp.nasaapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class NasaApiGatewayApplication {

//	@Autowired
//	private Filter apiFilter;

	public static void main(String[] args) {
		SpringApplication.run(NasaApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator apiRoutes(RouteLocatorBuilder builder) {

		return builder.routes()

				.route("registration-service", route -> route.path("/user/**").uri("lb://REGISTRATION-SERVICE"))
				.route("auth-service", route -> route.path("/auth/**").uri("lb://AUTH-SERVICE"))
				.build();

	}

}
