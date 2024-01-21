package com.nasaApp.registration.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;

@Builder
@Entity
public class UserProfile {

	@Id
	private String username;
	private String firstName;
	private String lastName;
	private String password;
	private String confirmPassword;
	private String contactNumber;
	private String email;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public UserProfile(String username, String firstName, String lastName, String password, String confirmPassword,
			String contactNumber, String email) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.contactNumber = contactNumber;
		this.email = email;
	}

	public UserProfile() {

	}

}
