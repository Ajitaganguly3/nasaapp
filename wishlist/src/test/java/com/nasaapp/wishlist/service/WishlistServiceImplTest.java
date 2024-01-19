package com.nasaapp.wishlist.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.nasaapp.wishlist.dto.ApodDTO;
import com.nasaapp.wishlist.entity.Wishlist;
import com.nasaapp.wishlist.exceptions.ImageAlreadyExistsException;
import com.nasaapp.wishlist.exceptions.ImageDoesNotExistException;
import com.nasaapp.wishlist.exceptions.WishlistEmptyException;
import com.nasaapp.wishlist.repository.WishlistRepository;

public class WishlistServiceImplTest {

	private WishlistServiceImpl wishlistService;

	private WishlistRepository wishlistRepository;

	@BeforeEach
	void setUp() {
		wishlistRepository = mock(WishlistRepository.class);
		wishlistService = new WishlistServiceImpl(wishlistRepository);
	}

	@Test
	public void testGetAllItems() throws WishlistEmptyException {
		Wishlist item1 = new Wishlist("url1", "Title 1", "2022-01-01");
		Wishlist item2 = new Wishlist("url2", "Title 2", "2022-01-02");
		when(wishlistRepository.findAll()).thenReturn(Arrays.asList(item1, item2));

		List<Wishlist> result = wishlistService.getAllItems();

		assertEquals(2, result.size());
		assertEquals(item1, result.get(0));
		assertEquals(item2, result.get(1));
	}

	@Test
	public void testAddToWishlist_Success() throws ImageAlreadyExistsException {
		ApodDTO apodDTO = new ApodDTO("url3", "Title 3", "2022-01-03");
		when(wishlistRepository.existsByUrl(apodDTO.getUrl())).thenReturn(false);

		assertDoesNotThrow(() -> wishlistService.addToWishlist(apodDTO));

		verify(wishlistRepository, times(1)).save(any(Wishlist.class));
	}

	@Test
	public void testDeleteFromWishlist_Success() throws ImageDoesNotExistException {
		ApodDTO apodDTO = new ApodDTO("url4", "Title 4", "2022-01-04");
		when(wishlistRepository.existsByUrl(apodDTO.getUrl())).thenReturn(true);

		assertDoesNotThrow(() -> wishlistService.deleteFromWishlist(apodDTO));

		verify(wishlistRepository, times(1)).deleteByUrl(apodDTO.getUrl());
	}

	@Test
	public void testAddToWishlist_ImageAlreadyExistsException() {
		ApodDTO apodDTO = new ApodDTO("url5", "Title 5", "2022-01-05");
		when(wishlistRepository.existsByUrl(apodDTO.getUrl())).thenReturn(true);

		assertThrows(ImageAlreadyExistsException.class, () -> wishlistService.addToWishlist(apodDTO));

		verify(wishlistRepository, never()).save(any(Wishlist.class));
	}

	@Test
	public void testDeleteFromWishlist_ImageDoesNotExistException() {
		ApodDTO apodDTO = new ApodDTO("url6", "Title 6", "2022-01-06");
		when(wishlistRepository.existsByUrl(apodDTO.getUrl())).thenReturn(false);

		assertThrows(ImageDoesNotExistException.class, () -> wishlistService.deleteFromWishlist(apodDTO));

		verify(wishlistRepository, never()).deleteByUrl(apodDTO.getUrl());
	}

	@Test
	public void testGetAllItems_WishlistEmptyException() {
		when(wishlistRepository.findAll()).thenReturn(Collections.emptyList());

		assertThrows(WishlistEmptyException.class, () -> wishlistService.getAllItems());

		verify(wishlistRepository, times(1)).findAll();
	}

}
