package com.nasaapp.wishlist.service;

import java.util.List;

import com.nasaapp.wishlist.dto.ApodDTO;
import com.nasaapp.wishlist.entity.Wishlist;
import com.nasaapp.wishlist.exceptions.ImageAlreadyExistsException;
import com.nasaapp.wishlist.exceptions.ImageDoesNotExistException;
import com.nasaapp.wishlist.exceptions.WishlistEmptyException;

public interface WishlistService {

	void addToWishlist(ApodDTO apodDTO) throws ImageAlreadyExistsException;

	List<Wishlist> getAllItems() throws WishlistEmptyException;

	void deleteFromWishlist(ApodDTO apodDTO) throws ImageDoesNotExistException;

}
