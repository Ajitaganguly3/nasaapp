package com.nasaApp.login.util;

import java.util.Date;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JWTUtil {

	private static final String secretKey = "${jwt.secret}";
	private long expirationTime = 1000 * 60 * 60;


	public String generateToken(String username) {

		return Jwts.builder().setSubject(username).setExpiration(new Date(System.currentTimeMillis() + expirationTime))
				.signWith(SignatureAlgorithm.HS256, secretKey).compact();
	}

}
