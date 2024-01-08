package com.nasaApp.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nasaApp.registration.entity.UserProfile;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, String>{
	
}