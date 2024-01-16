package com.nasaApp.login.responses;

import org.springframework.http.HttpStatus;

public class SuccessResponse {

	private String message;

	private String username;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public SuccessResponse(String message, HttpStatus ok) {
		super();

	}

}
