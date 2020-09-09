package com.mercury.communityManagement.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.mercury.communityManagement.daos.UserDao;
import com.mercury.communityManagement.http.AuthenticationSuccessResponse;
import com.mercury.communityManagement.http.Response;

@Service
public class AuthService {
	
	@Autowired
	private UserDao userDao;

	public Response checklogin(Authentication authentication) {
		if (authentication != null) {
			Response response = new AuthenticationSuccessResponse(true, 200, "Logged In!", userDao.findByUsername(authentication.getName()));
			return response;
		} else {
			return new Response(false);
		}
	}

}
