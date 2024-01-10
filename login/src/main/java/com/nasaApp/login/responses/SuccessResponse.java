package com.nasaApp.login.responses;

import java.util.List;

import org.springframework.http.HttpStatus;

public class SuccessResponse {

	private String message;
	private List<String> role;
	private String username;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<String> getRole() {
		return role;
	}

	public void setRole(List<String> role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public SuccessResponse(String message, List<String> role, String username) {
		super();
		this.message = message;
		this.role = role;
		this.username = username;
	}

	public SuccessResponse(String generateToken, HttpStatus ok) {
		// TODO Auto-generated constructor stub
	}

}
