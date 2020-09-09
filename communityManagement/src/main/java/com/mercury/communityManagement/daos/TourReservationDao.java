package com.mercury.communityManagement.daos;


import com.mercury.communityManagement.beans.TourReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TourReservationDao extends JpaRepository<TourReservation, Integer > {

    @Query(value="select * from tour_reservation where status = 'not finished'", nativeQuery = true)
    List<TourReservation> findNotFinished();

}
