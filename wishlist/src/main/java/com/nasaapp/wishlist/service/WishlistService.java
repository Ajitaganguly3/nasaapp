package com.nasaapp.wishlist.service;

import java.util.List;
import java.util.Map;

public interface WishlistService {

	void addToWishList(String imageUrl);

	List<Map<String, String>> getWishlist();

	void removeFromWishlist(String imageUrl);

}
