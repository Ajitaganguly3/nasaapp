package com.nasaapp.wishlist.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaapp.wishlist.entity.Apod;
import com.nasaapp.wishlist.repository.WishlistRepository;

@Service
public class WishlistServiceImpl implements WishlistService {

	@Autowired
	RestTemplate restTemplate;

	@Autowired
	WishlistRepository wishlistRepository;

	String baseUrl = "https://api.nasa.gov/planetary/";

	StringBuilder stringBuilder = new StringBuilder(baseUrl);
	String apiUrl = "/apod?api_key=5SjXN0KlUvLdGePPjV3jwS452DePfleVFWP15mKy";
	String dateUrl = apiUrl + "&date=";

	@Override
	public void addToWishlist(String date) {
		// TODO Auto-generated method stub
		String url = baseUrl + dateUrl + date;

		try {
			// Make a request to the NASA API
			ResponseEntity<Apod> responseEntity = restTemplate.exchange(url, HttpMethod.GET,
					new HttpEntity<>(gethttpHeaders()), Apod.class);
			Apod apod = responseEntity.getBody();
			String imageUrl = apod.getUrl();
			String title = apod.getTitle();
			Apod wishlistItem = new Apod();
			wishlistItem.setTitle(title);
			wishlistItem.setHdurl(imageUrl);
			wishlistRepository.save(wishlistItem);
		} catch (Exception e) {
			// Handle exceptions, log, or return an error response as needed
			e.printStackTrace();
		}

	}

	private HttpHeaders gethttpHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_JSON);
		return headers;
	}

}
