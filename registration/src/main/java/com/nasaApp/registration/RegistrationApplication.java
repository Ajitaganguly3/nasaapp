package com.nasaApp.registration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
//@EnableEurekaClient
public class RegistrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}

	@Bean
	public OpenAPI nasaAppOpenAPI() {
		String description = "This application performs registration services for both user and admin";
		String email = "ajita.ganguly@cognizant.com";
		return new OpenAPI().info(new Info().title("Nasa App").description(description)
				.contact(new Contact().email(email).name("Ajita Ganguly").url("ajita.com")));
	}

}
