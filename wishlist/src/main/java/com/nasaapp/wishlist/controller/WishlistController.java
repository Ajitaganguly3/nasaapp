package com.nasaapp.wishlist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nasaapp.wishlist.service.WishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {
	@Autowired
	private WishlistService wishlistService;

	@PostMapping("/add/{date}")
	public String addToWishlist(@PathVariable String date) {
		wishlistService.addToWishlist(date);
		return "Item added to wishlist successfully";

	}

//	@GetMapping("/all")
//	public List<Map<String, String>> getWishlists() {
//		return wishlistService.getWishlist();
//	}
//
//	@DeleteMapping
//	public void removeFromWishlists(@RequestParam String imageUrl) {
//		wishlistService.removeFromWishlist(imageUrl);
//	}

}
