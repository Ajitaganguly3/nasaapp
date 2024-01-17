package com.nasaApp.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.repository.AuthRepository;
import com.nasaApp.login.responses.RegistrationResponse;
import com.nasaApp.login.responses.SuccessResponse;
import com.nasaApp.login.util.JWTUtil;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private AuthRepository authRepository;

	@Autowired
	private JWTUtil jwtUtil;

	@Autowired
	private RestTemplate restTemplate;

	public AuthServiceImpl(AuthRepository authRepository, JWTUtil jwtUtil, RestTemplate restTemplate) {
		this.authRepository = authRepository;
		this.jwtUtil = jwtUtil;
		this.restTemplate = restTemplate;
	}

//	String baseUrl = "http://localhost:8083/user/";
//	StringBuilder stringBuilder = new StringBuilder(baseUrl);
//	String credentials = "credentials/";
	@Override
	public SuccessResponse authenticateUser(Authentication authentication) throws LoginException {
		// TODO Auto-generated method stub

		RegistrationResponse registrationResponse = restTemplate.getForObject(
				"http://localhost:8083/user/credentials/" + authentication.getUsername(), RegistrationResponse.class,
				authentication);

		// Validate password and generate JWT token
		if (registrationResponse != null && registrationResponse.getPassword().equals(authentication.getPassword())) {
			String token = jwtUtil.generateToken(registrationResponse.getUsername());
			return new SuccessResponse("Login Successful!", authentication.getUsername(), token);
		} else {
			// Handle invalid credentials
			throw new LoginException("Invalid Credentials");
		}
	}

}

//	@Override
//	public SuccessResponse login(Authentication authentication) throws LoginException {
//
//
//		HttpEntity<Void> httpEntity = new HttpEntity<>(gethttpHeaders());
//		String url = stringBuilder.append(credentials).append(authentication.getUsername()).toString();
//		ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, httpEntity, Map.class);
//		;
//		Map<String, Object> responseBody = response.getBody();
//		if (responseBody != null) {
//			Object passwordResponse = responseBody.get("password");
//			if (passwordResponse != null && passwordResponse.equals(authentication.getPassword())) {
//				String token = jwtUtil.generateToken(authentication);
//				String usernameResponse = responseBody.get("username").toString();
//				authRepository.save(authentication);
//				return new SuccessResponse("Login successful", usernameResponse, token);
//			} 
//		} 
//
//			throw new LoginException("Invalid username or password");
//		
//
//	}
//
//	private HttpHeaders gethttpHeaders() {
//		HttpHeaders headers = new HttpHeaders();
//		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		return headers;
//	}
