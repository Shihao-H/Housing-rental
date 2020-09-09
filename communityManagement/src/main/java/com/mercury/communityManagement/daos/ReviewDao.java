package com.mercury.communityManagement.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.communityManagement.beans.Review;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewDao extends JpaRepository<Review, Integer> {

    @Query(value="select * from review order by date", nativeQuery = true)
    List<Review> findByDate();
}
