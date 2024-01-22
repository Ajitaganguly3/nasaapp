package com.nasaapp.wishlist.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
public class WishlistId implements Serializable {

	private static final long serialVersionUID = 8242309617655575798L;

	private String username;
	private String date;
	private String url;

	public WishlistId(String username, String date, String url) {
		// TODO Auto-generated constructor stub
		this.username = username;
		this.date = date;
		this.url = url;
	}

}
