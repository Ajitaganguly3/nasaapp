package com.nasaApp.login.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;

public interface AuthService extends UserDetailsService {

	public SuccessResponse login(Authentication authentication) throws LoginException;

}
