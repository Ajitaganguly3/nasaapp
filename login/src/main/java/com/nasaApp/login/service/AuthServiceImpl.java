package com.nasaApp.login.service;

import org.springframework.stereotype.Service;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;

@Service
public class AuthServiceImpl implements AuthService {

	@Override
	public SuccessResponse login(Authentication authentication) throws LoginException {
		// TODO Auto-generated method stub
		return null;
	}

}
