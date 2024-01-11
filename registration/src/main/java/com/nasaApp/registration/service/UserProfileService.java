package com.nasaApp.registration.service;

import com.nasaApp.registration.dto.MessageResponse;
import com.nasaApp.registration.dto.UserProfileDTO;
import com.nasaApp.registration.entity.UserProfile;
import com.nasaApp.registration.exceptions.InvalidPasswordException;
import com.nasaApp.registration.exceptions.UserNotFoundException;
import com.nasaApp.registration.exceptions.UsernameAlreadyExistException;

public interface UserProfileService {

	public MessageResponse register(UserProfileDTO userProfileDto)
			throws UsernameAlreadyExistException, InvalidPasswordException;

	public UserProfile getUserInfo(String username) throws UserNotFoundException;

}
