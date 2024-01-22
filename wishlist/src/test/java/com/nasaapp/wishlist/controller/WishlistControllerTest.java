package com.nasaapp.wishlist.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.nasaapp.wishlist.dto.WishlistDTO;
import com.nasaapp.wishlist.entity.Wishlist;
import com.nasaapp.wishlist.exceptions.ImageAlreadyExistsException;
import com.nasaapp.wishlist.exceptions.ImageDoesNotExistException;
import com.nasaapp.wishlist.exceptions.WishlistEmptyException;
import com.nasaapp.wishlist.service.WishlistService;

public class WishlistControllerTest {

	private WishlistService wishlistService;
	private WishlistController wishlistController;

	@BeforeEach
	void setUp() {
		wishlistService = mock(WishlistService.class);
		wishlistController = new WishlistController(wishlistService);

	}

	@Test
	void addToWishlist_Success() throws ImageAlreadyExistsException {
		WishlistDTO apodDTO = new WishlistDTO();
		doNothing().when(wishlistService).addToWishlist(apodDTO);

		ResponseEntity<String> response = wishlistController.addToWishlist(apodDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("Added to wishlist successfully.", response.getBody());
	}

	@Test
	void addToWishlist_Conflict() throws ImageAlreadyExistsException {
		WishlistDTO apodDTO = new WishlistDTO();
		doThrow(new ImageAlreadyExistsException("Image already exists")).when(wishlistService).addToWishlist(apodDTO);

		ResponseEntity<String> response = wishlistController.addToWishlist(apodDTO);

		assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
		assertEquals("Image already exists", response.getBody());
	}

	@Test
	void getAllItems_Success() throws WishlistEmptyException {
		List<Wishlist> expectedList = Arrays.asList(new Wishlist(), new Wishlist());
		when(wishlistService.getAllItems()).thenReturn(expectedList);

		ResponseEntity<?> response = wishlistController.getAllItems();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(expectedList, response.getBody());
	}

	@Test
	void getAllItems_NotFound() throws WishlistEmptyException {
		when(wishlistService.getAllItems()).thenThrow(new WishlistEmptyException("Wishlist is empty"));

		ResponseEntity<?> response = wishlistController.getAllItems();

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals("Wishlist is empty", response.getBody());
	}

	@Test
	void deleteFromWishlist_Success() throws ImageDoesNotExistException {
		WishlistDTO apodDTO = new WishlistDTO(); // provide appropriate values
		doNothing().when(wishlistService).deleteFromWishlist(apodDTO);

		ResponseEntity<String> response = wishlistController.deleteFromWishlist(apodDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("Deleted from wishlist successfully.", response.getBody());
	}

	@Test
	void deleteFromWishlist_NotFound() throws ImageDoesNotExistException {
		WishlistDTO apodDTO = new WishlistDTO(); // provide appropriate values
		doThrow(new ImageDoesNotExistException("Image does not exist")).when(wishlistService)
				.deleteFromWishlist(apodDTO);

		ResponseEntity<String> response = wishlistController.deleteFromWishlist(apodDTO);

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals("Image does not exist", response.getBody());
	}

}
