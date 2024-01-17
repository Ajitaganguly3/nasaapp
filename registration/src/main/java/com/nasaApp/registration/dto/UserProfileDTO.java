package com.nasaApp.registration.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;

public class UserProfileDTO {

	private String id;

	@NotEmpty(message = "First Name cannot be empty or null")
	private String firstName;
	@NotEmpty(message = "Last Name cannot be empty or null")
	private String lastName;
	@Email(message = "Email should be valid")
	private String email;
	@NotEmpty
	private String username;
	@NotEmpty
	private String contactNumber;
	@Min(value = 8, message = "Password should be of length 8 atleast")
	private String password;
	@Min(value = 8, message = "Password should be of length 8 atleast")
	private String confirmPassword;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

}
