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

	private String title;
	private String date;
	private String url;

	public WishlistId(String title, String date, String url) {
		// TODO Auto-generated constructor stub
		this.title = title;
		this.date = date;
		this.url = url;
	}

}
