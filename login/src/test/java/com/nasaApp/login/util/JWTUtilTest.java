package com.nasaApp.login.util;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class JWTUtilTest {

	private JWTUtil jwtUtil;

	@BeforeEach
	public void setUp() {
		jwtUtil = new JWTUtil();
	}

	@Test
	void testGenerateToken() {
		JWTUtil jwtUtil = new JWTUtil();
		String token = jwtUtil.generateToken("testUser");
		assertNotNull(token);
	}

}
