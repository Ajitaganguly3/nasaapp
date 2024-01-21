package com.nasaapp.wishlist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nasaapp.wishlist.entity.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, String> {

	boolean existsByUrl(String url);

	void deleteByUrl(String url);

}
