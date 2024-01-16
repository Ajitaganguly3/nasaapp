package com.nasaapp.wishlist.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WishlistServiceImpl implements WishlistService {

	@Autowired
	RestTemplate restTemplate;

	private Map<String, String> wishlist = new HashMap<>();

	private static final String apiKey = "5SjXN0KlUvLdGePPjV3jwS452DePfleVFWP15mKy";

	@Override
	public void addToWishList(String imageUrl) {
		// TODO Auto-generated method stub

		String title = getTitleFromNasaApi(imageUrl);
		wishlist.put(imageUrl, title);

	}

	@Override
	public List<Map<String, String>> getWishlist() {
		// TODO Auto-generated method stub

		List<Map<String, String>> wishlistItems = new ArrayList<>();
		wishlist.forEach((url, title) -> {
			Map<String, String> item = new HashMap<>();
			item.put("url", url);
			item.put("title", title);
			wishlistItems.add(item);
		});
		return wishlistItems;
	}

	@Override
	public void removeFromWishlist(String imageUrl) {
		// TODO Auto-generated method stub
		wishlist.remove(imageUrl);

	}

	private String getTitleFromNasaApi(String imageUrl) {
		String url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&hd=" + imageUrl;
		Map<String, Object> response = restTemplate.getForObject(url, Map.class);
		if (response != null && response.containsKey("title")) {
			return (String) response.get("title");
		} else {
			return "unknown title";
		}
	}

}
