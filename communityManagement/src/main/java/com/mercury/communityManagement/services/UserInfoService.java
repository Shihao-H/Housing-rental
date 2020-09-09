package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.Search;
import com.mercury.communityManagement.beans.UserInfo2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.mercury.communityManagement.beans.User;
import com.mercury.communityManagement.beans.UserInfo;
import com.mercury.communityManagement.daos.UserDao;
import com.mercury.communityManagement.daos.UserInfoDao;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.http.UserInfoResponse;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserInfoService {

	@Autowired
	UserDao userDao;
	
	@Autowired
	UserInfoDao userInfoDao;
	
	public Response addUserInfo(UserInfo userInfo, Authentication authentication) {

		User user = userDao.findByUsername(authentication.getName());
		userInfo.setUser(user);
		return new UserInfoResponse(true, userInfoDao.save(userInfo));
	}


	public Response putUserInfo(UserInfo userInfo) {
		UserInfo ud = userInfoDao.findById(userInfo.getId()).get();
		userInfo.setUser(ud.getUser());
		ud = userInfo;
		userInfoDao.save(ud);
		return new Response(true);

	}


	public UserInfo getUserInfo(int userId){
		List<UserInfo> userInfos = userInfoDao.findAll();
		for(UserInfo userInfo : userInfos){
			if(userInfo.getUser().getId()==userId){
				return userInfo;
			}
		}
		return null;
	}

	public List<UserInfo> getAll() {
		return userInfoDao.findAll();
	}

	public List<UserInfo2> getUserInfoSearch(Search search) {
//		System.out.println("	enter					");
		String temp1 = search.getFirstname();
		String temp2 = search.getMiddlename();
		String temp3 = search.getLastname();
		List<UserInfo> holder = new ArrayList<>();


		if(!search.getFirstname().equals("") && search.getMiddlename().equals("") && search.getLastname().equals(""))
			holder = userInfoDao.findbyFirstname(temp1);
//
		if(search.getFirstname().equals("") && !search.getMiddlename().equals("") && search.getLastname().equals(""))
			holder = userInfoDao.findbyMiddlename(temp2);
//
		if(search.getFirstname().equals("") && search.getMiddlename().equals("") && !search.getLastname().equals(""))
			holder = userInfoDao.findbyLastname(temp3);

		if(!search.getFirstname().equals("") && !search.getMiddlename().equals("") && search.getLastname().equals(""))
			holder = userInfoDao.findbyFirstnameAndMiddlename(temp1,temp2);


		if(!search.getFirstname().equals("") && search.getMiddlename().equals("") && !search.getLastname().equals(""))
			holder = userInfoDao.findbyFirstnameAndLastname(temp1,temp3);

		if(search.getFirstname().equals("") && !search.getMiddlename().equals("") && !search.getLastname().equals(""))
			holder = userInfoDao.findbyMiddlenameAndLastname(temp2,temp3);

		if(!search.getFirstname().equals("") && !search.getMiddlename().equals("") && !search.getLastname().equals(""))
			holder = userInfoDao.findbyFirstnameAndMiddlenameAndLastname(temp1, temp2, temp3);

		if(search.getFirstname().equals("") && search.getMiddlename().equals("") && search.getLastname().equals(""))
			holder = userInfoDao.findAll();


		List<UserInfo2> results = new ArrayList<>();


		for(UserInfo userInfo : holder){
			UserInfo2 u2 = new UserInfo2(userInfo.getId(), userInfo.getFirstname(),
					userInfo.getMiddlename(), userInfo.getLastname(), userInfo.getEmail(),
					userInfo.getPhone(),userInfo.getBirthdate(), userInfo.getSsn(),
					userInfo.getAddress1(), userInfo.getAddress2(),  userInfo.getState(),
					userInfo.getCity(), userInfo.getZip(), userInfo.getUser().getId());

			results.add(u2);
		}


		return results;
	}
}

