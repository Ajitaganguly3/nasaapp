package com.nasaapp.apod.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaapp.apod.entity.Apod;
import com.nasaapp.apod.repository.ApodRepository;

@Service
public class ApodServiceImpl implements ApodService {

	@Autowired
	private RestTemplate restTemplate;

	@Value("${nasa.api.key}")
	private String nasaApiKey;

	String baseUrl = "https://api.nasa.gov/planetary/";

	StringBuilder stringBuilder = new StringBuilder(baseUrl);
	String apiUrl = "/apod?api_key=" + nasaApiKey;
	String dateUrl = apiUrl + "&date=";

	@Override
	public List<Map<String, Object>> getApods() {
		// TODO Auto-generated method stub
		HttpEntity<Void> httpEntity = new HttpEntity<>(gethttpHeaders());
		String url = stringBuilder.append(apiUrl).toString();
		ResponseEntity<List> response = restTemplate.exchange(url, HttpMethod.GET, httpEntity, List.class);

		return response.getBody();
	}

//	@Override
//	public Apod getPictureOfTheDay() {
//		// TODO Auto-generated method stub
//		String apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey;
//		return fetchDatsa(apiUrl);
//
//	}

//	@Override
//	public Apod getPictureByDate(String date) {
//		// TODO Auto-generated method stub
//		String apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey + "&date=" + date;
//		return fetchData(apiUrl);
//	}

	private HttpHeaders gethttpHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_JSON);
		return headers;
	}

	@Override
	public Map<String, Object> getPostById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
