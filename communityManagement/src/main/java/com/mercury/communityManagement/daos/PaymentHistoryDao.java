package com.mercury.communityManagement.daos;

import com.mercury.communityManagement.beans.PaymentHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentHistoryDao extends JpaRepository<PaymentHistory, Integer> {

    @Query(value="select * from payment_history where uid = ?1", nativeQuery = true)
    List<PaymentHistory> findByUserId(int uid);

}