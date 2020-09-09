package com.mercury.communityManagement.daos;


import com.mercury.communityManagement.beans.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MaintenanceDao extends JpaRepository<Maintenance, Integer> {

    @Query(value="select * from maintenance where status = 'not finished'", nativeQuery = true)
    List<Maintenance> findNotFinished();

}