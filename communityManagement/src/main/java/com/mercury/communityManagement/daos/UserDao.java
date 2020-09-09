package com.mercury.communityManagement.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.communityManagement.beans.User;

public interface UserDao extends JpaRepository<User, Integer > {

	User findByUsername(String username);
}
