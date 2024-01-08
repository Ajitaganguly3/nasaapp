package com.nasaApp.registration.entity;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {

	/**
	 * 
	 */
	private static final long serialVersionUID = 290294949548292570L;
	private String role;

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return null;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Role() {

	}

}
