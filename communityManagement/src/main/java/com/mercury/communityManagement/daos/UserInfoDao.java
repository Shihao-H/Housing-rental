package com.mercury.communityManagement.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.communityManagement.beans.UserInfo;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {

//    @Query(value = "SELECT * FROM user_detail WHERE firstname = ?1 and middlename = ?1 and lastname = ?1", nativeQuery = true)
//    List<UserInfo> getUserInfoSearch(String firstname, String middlename, String lastname);

    @Query(value = "SELECT * FROM user_detail WHERE firstname = ?1", nativeQuery = true)
    List<UserInfo> findbyFirstname(String firstname);

    @Query(value = "SELECT * FROM user_detail WHERE middlename = ?1", nativeQuery = true)
    List<UserInfo> findbyMiddlename(String middlename);

    @Query(value = "SELECT * FROM user_detail WHERE lastname = ?1", nativeQuery = true)
    List<UserInfo> findbyLastname(String lastname);

    @Query(value = "SELECT * FROM user_detail WHERE firstname = ?1 and middlename = ?2", nativeQuery = true)
    List<UserInfo> findbyFirstnameAndMiddlename(String firstname, String middlename);

    @Query(value = "SELECT * FROM user_detail WHERE firstname = ?1 and lastname = ?2", nativeQuery = true)
    List<UserInfo> findbyFirstnameAndLastname(String firstname, String lastname);

    @Query(value = "SELECT * FROM user_detail WHERE middlename = ?1 and lastname = ?2", nativeQuery = true)
    List<UserInfo> findbyMiddlenameAndLastname(String middlename, String lastname);

    @Query(value = "SELECT * FROM user_detail WHERE firstname = ?1 and middlename = ?2 and lastname = ?3", nativeQuery = true)
    List<UserInfo> findbyFirstnameAndMiddlenameAndLastname(String firstname, String middlename, String lastname);


}


