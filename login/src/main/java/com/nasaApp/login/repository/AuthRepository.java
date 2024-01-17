package com.nasaApp.login.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nasaApp.login.entity.Authentication;

public interface AuthRepository extends MongoRepository<Authentication, String> {

	Authentication findByUsername(String username);
}
