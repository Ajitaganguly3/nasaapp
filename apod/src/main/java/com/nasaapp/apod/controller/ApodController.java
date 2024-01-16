package com.nasaapp.apod.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nasaapp.apod.service.ApodService;

@RestController
public class ApodController {

	// private static final Logger log = LoggerFactory.getLogger(Apod.class);

	@Autowired
	private ApodService apodService;

	@GetMapping("/data")
	public ResponseEntity<?> getApods() {
		List<Map<String, Object>> dataList = apodService.getApods();
		return new ResponseEntity<>(dataList, HttpStatus.OK);
	}

//	@GetMapping("/apod")
//	public ResponseEntity<Apod> getPictureOfTheDay() {
//		Apod apod = apodService.getPictureOfTheDay();
//		log.info("Recieved request for picture of the day");
//		return new ResponseEntity<>(apod, HttpStatus.OK);
//	}
//
//	@GetMapping("/apodByDate")
//	public ResponseEntity<Apod> getPictureByDate(String Date) {
//
//		Apod apod = apodService.getPictureByDate(Date);
//		return new ResponseEntity<>(apod, HttpStatus.OK);
//	}

}
