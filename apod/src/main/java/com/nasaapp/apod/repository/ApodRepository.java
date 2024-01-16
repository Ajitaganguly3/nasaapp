package com.nasaapp.apod.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nasaapp.apod.entity.Apod;

public interface ApodRepository extends MongoRepository<Apod, String> {

	Apod findByDate(String date);
}
