package com.nasaApp.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.RegistrationResponse;
import com.nasaApp.login.responses.SuccessResponse;
import com.nasaApp.login.util.JWTUtil;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private JWTUtil jwtUtil;

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public SuccessResponse authenticateUser(Authentication authentication) throws LoginException {
		// TODO Auto-generated method stub

		RegistrationResponse registrationResponse = restTemplate.getForObject(
				"http://localhost:8083/user/credentials/" + authentication.getUsername(), RegistrationResponse.class,
				authentication);

		// Validating password and generating JWT token
		if (registrationResponse != null && registrationResponse.getPassword().equals(authentication.getPassword())) {
			String token = jwtUtil.generateToken(registrationResponse.getUsername());
			return new SuccessResponse("Login Successful!", authentication.getUsername(), token);
		} else {
			// Handling invalid credentials
			throw new LoginException("Invalid Credentials");
		}
	}

}
