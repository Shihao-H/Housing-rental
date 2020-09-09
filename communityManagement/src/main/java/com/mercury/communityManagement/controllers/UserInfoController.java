package com.mercury.communityManagement.controllers;


import com.mercury.communityManagement.beans.Search;
import com.mercury.communityManagement.beans.UserInfo2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.mercury.communityManagement.beans.UserInfo;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.UserInfoService;

import java.util.List;

@RestController
@RequestMapping("/user-details")
public class UserInfoController {
	
	@Autowired
	UserInfoService userInfoService;

	@PreAuthorize("permitAll()")
	@GetMapping
	public List<UserInfo> getAll() {
		return userInfoService.getAll();
	}


	@PostMapping("/search")
	public List<UserInfo2> getUserInfoSearch(@RequestBody Search search)  {
		return userInfoService.getUserInfoSearch(search);
	}

	@PreAuthorize("permitAll()")
	@GetMapping("/{userId}")
	public UserInfo getUserDetail(@PathVariable int userId) {
		return userInfoService.getUserInfo(userId);
	}

	@PostMapping
	public Response postUserDetails(@RequestBody UserInfo userInfo, Authentication authentication) {
		return userInfoService.addUserInfo(userInfo, authentication);
	}


	@PutMapping
	public Response putUserInfo(@RequestBody UserInfo userInfo) {
        System.out.println("UserInfo: " + userInfo.toString());
		return userInfoService.putUserInfo(userInfo);
	}

}
