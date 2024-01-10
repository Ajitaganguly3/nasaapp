package com.nasaApp.login.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;

@Service
public class AuthServiceImpl implements AuthService {

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SuccessResponse login(Authentication authentication) throws LoginException {
		// TODO Auto-generated method stub
		return null;
	}

}
