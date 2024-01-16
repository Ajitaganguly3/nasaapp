package com.nasaapp.apod.service;

import java.util.List;
import java.util.Map;

public interface ApodService {

//	public Apod getPictureOfTheDay();
//
//	public Apod getPictureByDate(String date);

	public List<Map<String, Object>> getApods();
	
	public Map<String, Object> getPostById(int id) 

}
