package com.nasaApp.login.entity;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {

	/**
	 * 
	 */
	private static final long serialVersionUID = -648221643213015730L;

	private String role;

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return role;
	}

	public Role() {

	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
