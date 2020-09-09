package com.mercury.communityManagement.daos;

import com.mercury.communityManagement.beans.EmailUs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmailUsDao extends JpaRepository<EmailUs, Integer> {

    @Query(value="select * from email_us where status = 'not replied'", nativeQuery = true)
    List<EmailUs> findNotReplied();

}
