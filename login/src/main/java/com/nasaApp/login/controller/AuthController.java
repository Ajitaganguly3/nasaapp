package com.nasaApp.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nasaApp.login.entity.Authentication;
import com.nasaApp.login.exceptions.LoginException;
import com.nasaApp.login.responses.SuccessResponse;
import com.nasaApp.login.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthService authService;

	@PostMapping("/authenticate")
	public ResponseEntity<?> login(@RequestBody Authentication authentication) throws LoginException {
		try {
			SuccessResponse successResponse = authService.login(authentication);
			return ResponseEntity.ok(successResponse);
		} catch (LoginException e) {
			// TODO: handle exception
			throw new LoginException("Enter correct username or password");
		}
	}

}
