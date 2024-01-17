package com.nasaapp.wishlist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nasaapp.wishlist.entity.Apod;

@Repository
public interface WishlistRepository extends MongoRepository<Apod, String> {

}
