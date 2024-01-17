package com.nasaapp.apod.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApodServiceImpl implements ApodService {

	@Autowired
	private RestTemplate restTemplate;


	String baseUrl = "https://api.nasa.gov/planetary/";

	StringBuilder stringBuilder = new StringBuilder(baseUrl);
	String apiUrl = "/apod?api_key=5SjXN0KlUvLdGePPjV3jwS452DePfleVFWP15mKy";
	String dateUrl = apiUrl + "&date=";

	@Override
	public List<Map<String, Object>> getApods() {
		// TODO Auto-generated method stub
		HttpEntity<Void> httpEntity = new HttpEntity<>(gethttpHeaders());
		String url = stringBuilder.append(apiUrl).toString();
		ResponseEntity<List> response = restTemplate.exchange(url, HttpMethod.GET, httpEntity, List.class);

		return response.getBody();
	}

	@Override
	public Map<String, Object> getApodByDate(String date) {
		// TODO Auto-generated method stub
		HttpEntity<Void> httpEntity = new HttpEntity<>(gethttpHeaders());
		String url = stringBuilder.append(dateUrl).append(date).toString();
		ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, httpEntity, Map.class);
		;
		return response.getBody();
	}

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

}
