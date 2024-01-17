package com.nasaapp.apod.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaapp.apod.entity.Apod;

@Service
public class ApodServiceImpl implements ApodService {

	@Autowired
	private RestTemplate restTemplate;

	String baseUrl = "https://api.nasa.gov/planetary/";

	StringBuilder stringBuilder = new StringBuilder(baseUrl);
	String apiUrl = "/apod?api_key=5SjXN0KlUvLdGePPjV3jwS452DePfleVFWP15mKy";
	String dateUrl = apiUrl + "&date=";

	@Override
	public Apod getApods() {

		String fullUrl = baseUrl + apiUrl;

		ResponseEntity<Apod> responseEntity = restTemplate.exchange(fullUrl, HttpMethod.GET,
				new HttpEntity<>(gethttpHeaders()), Apod.class);

		return responseEntity.getBody();

	}

	@Override
	public Apod getApodByDate(String date) {
		// TODO Auto-generated method stub
		String fullUrl = baseUrl + dateUrl + date;

		ResponseEntity<Apod> responseEntity = restTemplate.exchange(fullUrl, HttpMethod.GET,
				new HttpEntity<>(gethttpHeaders()), Apod.class);

		return responseEntity.getBody();
	}

	private HttpHeaders gethttpHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_JSON);
		return headers;
	}

}
