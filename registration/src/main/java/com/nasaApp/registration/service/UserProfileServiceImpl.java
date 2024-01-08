package com.nasaApp.registration.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nasaApp.registration.dto.MessageResponse;
import com.nasaApp.registration.dto.UserProfileDTO;
import com.nasaApp.registration.entity.UserProfile;
import com.nasaApp.registration.exceptions.InvalidPasswordException;
import com.nasaApp.registration.exceptions.UsernameAlreadyExistException;
import com.nasaApp.registration.repository.UserProfileRepository;
import com.nasaApp.registration.validation.UserProfileValidation;

import jakarta.validation.Valid;

@Service
public class UserProfileServiceImpl implements UserProfileService {

	@Autowired
	private UserProfileRepository userProfileRepository;

	@Override
	public MessageResponse register(@Valid UserProfileDTO userProfileDto)
			throws UsernameAlreadyExistException, InvalidPasswordException {
		// TODO Auto-generated method stub

		Optional<UserProfile> existingUser = userProfileRepository.findById(userProfileDto.getUsername());
		if (existingUser.isPresent()) {
			throw new UsernameAlreadyExistException("Username already exists");
		}
		if (!UserProfileValidation.isPasswordValid(userProfileDto.getPassword())) {
			throw new InvalidPasswordException(
					"Password should have atleast 1 lowercase, uppercase, special character");
		}
		if (!UserProfileValidation.compareConfirmPasswordAndPasswordFields(userProfileDto.getPassword(),
				userProfileDto.getConfirmPassword())) {
			throw new InvalidPasswordException(
					"Password should have atleast 1 lowercase, uppercase, special character");
		}

		UserProfile userProfile = new UserProfile();
		userProfile.setUsername(userProfileDto.getUsername());
		userProfile.setFirstName(userProfileDto.getFirstName());
		userProfile.setLastName(userProfileDto.getLastName());
		userProfile.setPassword(userProfileDto.getPassword());
		userProfile.setConfirmPassword(userProfileDto.getConfirmPassword());
		userProfile.setEmail(userProfileDto.getEmail());
		userProfile.setContactNumber(userProfileDto.getContactNumber());
		userProfile.setRoles(userProfileDto.getRoles());

		return new MessageResponse("User Registered Successfully!", HttpStatus.OK);
	}

}