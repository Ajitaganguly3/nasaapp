package com.nasaapp.wishlist.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nasaapp.wishlist.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {
	@Autowired
	private WishlistService wishlistService;

	@PostMapping("/add")
	public void addToWishlist(@RequestParam String imageUrl) {
		wishlistService.addToWishList(imageUrl);
	}

	@GetMapping("/all")
	public List<Map<String, String>> getWishlists() {
		return wishlistService.getWishlist();
	}

	@DeleteMapping
	public void removeFromWishlists(@RequestParam String imageUrl) {
		wishlistService.removeFromWishlist(imageUrl);
	}

}
