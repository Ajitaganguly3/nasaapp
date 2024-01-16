package com.nasaApp.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaApp.login.dto.CustomUserDetails;
import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;
import com.nasaApp.login.util.JWTUtil;

@Service
public class AuthServiceImpl implements AuthService {

	

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private JWTUtil jwtUtil;

	@Value("registrationServiceUrl")
	private String registrationServiceUrl;

	@Override
	public SuccessResponse login(Authentication authentication) throws LoginException {
		// TODO Auto-generated method stub
		// String methodName = "login()";
		// log.info("{} method invoked. In Process", methodName);
		String username = authentication.getUsername();
		ResponseEntity<Authentication> responseEntity = restTemplate
				.getForEntity(registrationServiceUrl + "credentials/" + username, Authentication.class);

		if (responseEntity.getStatusCode() == HttpStatus.OK) {
			Authentication credentials = responseEntity.getBody();
			if (credentials.getPassword().equals(authentication.getPassword())) {
				UserDetails userDetails = new CustomUserDetails(authentication);
				return new SuccessResponse(jwtUtil.generateToken(userDetails), HttpStatus.OK);
			} else {
				throw new LoginException("Login Failed Please enter correct credentials");
			}

		} else {
			throw new LoginException("Login Failed Please enter correct credentials");
		}

	}

}
