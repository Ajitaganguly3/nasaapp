package com.nasaApp.login.service;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;

public interface AuthService {

	// public SuccessResponse login(Authentication authentication) throws
	// LoginException;

//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

	SuccessResponse authenticateUser(Authentication authentication) throws LoginException;

}
