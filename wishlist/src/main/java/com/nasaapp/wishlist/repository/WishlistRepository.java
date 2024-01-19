package com.nasaapp.wishlist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nasaapp.wishlist.entity.Wishlist;

@Repository
public interface WishlistRepository extends MongoRepository<Wishlist, String> {

	boolean existsByUrl(String url);

	void deleteByUrl(String url);

}
