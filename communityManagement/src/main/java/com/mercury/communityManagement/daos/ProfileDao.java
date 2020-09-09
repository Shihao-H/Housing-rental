package com.mercury.communityManagement.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.communityManagement.beans.Profile;

public interface ProfileDao extends JpaRepository<Profile, Integer > {

	
}
