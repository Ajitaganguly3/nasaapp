package com.nasaapp.apod.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Collections;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.nasaapp.apod.entity.Apod;
import com.nasaapp.apod.repository.ApodRepository;

public class ApodServiceImplTest {

	private ApodServiceImpl apodService;
	private RestTemplate restTemplateMock;
	private ApodRepository apodRepositoryMock;

	@BeforeEach
	void setUp() {
		restTemplateMock = mock(RestTemplate.class);
		apodRepositoryMock = mock(ApodRepository.class);
		apodService = new ApodServiceImpl(restTemplateMock, apodRepositoryMock);
	}

	@Test
	void testGetApods() {
		// Mocking the external service call
		Apod mockApod = new Apod(); // Create a sample Apod object for mocking
		ResponseEntity<Apod> mockResponseEntity = ResponseEntity.ok(mockApod);
		when(restTemplateMock.exchange(
				"https://api.nasa.gov/planetary//apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ", HttpMethod.GET,
				new HttpEntity<>(getHttpHeaders()), Apod.class)).thenReturn(mockResponseEntity);

		// Mocking repository save
		when(apodRepositoryMock.save(mockApod)).thenReturn(mockApod);

		Apod result = apodService.getApods();

		// Assertions
		assertEquals(mockApod, result);
	}

	@Test
	void testGetApodByDate() {
		// Mocking the external service call
		String date = "2024-01-19";
		Apod mockApod = new Apod(); // Create a sample Apod object for mocking
		ResponseEntity<Apod> mockResponseEntity = ResponseEntity.ok(mockApod);
		when(restTemplateMock.exchange(
				"https://api.nasa.gov/planetary//apod?api_key=zhjoGExY6FeyM8buMcsnGj2fazcyfBeOzeH4dLBZ&date=" + date,
				HttpMethod.GET, new HttpEntity<>(getHttpHeaders()), Apod.class)).thenReturn(mockResponseEntity);

		Apod result = apodService.getApodByDate(date);

		// Assertions
		assertEquals(mockApod, result);
	}

	private HttpHeaders getHttpHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_JSON);
		return headers;
	}

}
