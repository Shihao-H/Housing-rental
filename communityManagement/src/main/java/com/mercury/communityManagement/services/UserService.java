package com.mercury.communityManagement.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.mercury.communityManagement.beans.Application;
import com.mercury.communityManagement.beans.UserInfo;
import com.mercury.communityManagement.daos.ApplicationDao;
import com.mercury.communityManagement.daos.UserInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mercury.communityManagement.beans.Profile;
import com.mercury.communityManagement.beans.User;
import com.mercury.communityManagement.daos.UserDao;
import com.mercury.communityManagement.http.Response;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private UserInfoDao userInfoDao;

	@Autowired
	private ApplicationDao applicationDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<User> getAll() {
		return userDao.findAll();
	}

	public Response activateUser(int id) {
		try {
			User u = userDao.findById(id).get();
			u.setIsactive(true);
			userDao.save(u);
		}
		catch(Exception e)
		{
			return new Response(false);
		}
		return new Response(true);

	}

	public Response deActivateUser(Integer id) {
		try {
			User u = userDao.findById(id).get();
			u.setIsactive(false);
			userDao.save(u);
		}
		catch(Exception e)
		{
			return new Response(false);
		}
		return new Response(true);
	}


	public Response register(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		List<Profile> profiles = new ArrayList<Profile>();
		profiles.add(new Profile(2));
		user.setProfiles(profiles);
		userDao.save(user);
		UserInfo newUserInfo = new UserInfo(" "," "," "," "," ",
				" "," "," "," "," "," "," ",user);
		userInfoDao.save(newUserInfo);


		Application ap = new Application(" "," "," "," "," "," ",
				" "," "," "," "," "," "," ", null, " ", user);
		applicationDao.save(ap);
		return new Response(true);
	}
	
	public Response changePassword(User user, Authentication authentication) {
		if(user.getUsername().equals(authentication.getName()) || isAdmin(authentication.getAuthorities())) {
			User u = userDao.findByUsername(user.getUsername());
			u.setPassword(passwordEncoder.encode(user.getPassword()));
			userDao.save(u);
		}else {
			//TODO: Not authorize to update password if not current loggedin user or admin.
			return new Response(false);
		}
		return new Response(true);
	}
	
	public boolean isAdmin(Collection<? extends GrantedAuthority> profiles) {
		boolean isAdmin = false;
		for(GrantedAuthority profle: profiles) {
			if(profle.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			}
		};
		return isAdmin;
	}
	
	public Response deleteUser(int id) {
		if(userDao.findById(id).get() != null) {
			userDao.deleteById(id);
			return new Response(true);
		}else {
			return new Response(false, "User is not found!");
		}
	}
}
