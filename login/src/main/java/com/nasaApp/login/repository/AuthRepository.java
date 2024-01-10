package com.nasaApp.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nasaApp.login.entity.Authentication;

@Repository
public interface AuthRepository extends JpaRepository<Authentication, String> {

}
