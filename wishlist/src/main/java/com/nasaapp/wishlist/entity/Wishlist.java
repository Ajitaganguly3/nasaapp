package com.nasaapp.wishlist.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Wishlist {

	@Id
	private String title;

	private String date;
	private String url;

	public Wishlist(String url, String title, String date) {
		// TODO Auto-generated constructor stub
		this.url = url;
		this.title = title;
		this.date = date;
	}

	public Wishlist() {
		// TODO Auto-generated constructor stub
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
