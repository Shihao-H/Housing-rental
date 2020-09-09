package com.mercury.communityManagement.daos;

import com.mercury.communityManagement.beans.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ApplicationDao extends JpaRepository<Application, Integer> {
    Application findByUser_Id(int user_id);

    @Query(value = "SELECT * FROM application WHERE status = 'not finished'", nativeQuery = true)
    List<Application> getNotFinished();


    @Query(value = "SELECT * FROM application WHERE status = 'finished'", nativeQuery = true)
    List<Application> getFinished();

//    @Query(value="select roomnum, user_id from application INNER JOIN (select * from Room_info where " +
//            "type = 2 and space = 1) as t1 using (roomnum) " +
//            "where neat = ? and quite = ? and applicantsmoke = ? and applicantgender = ?" +
//            "and applicantpet = ? and applicantdrink = ? and roommatedrink = ? and " +
//            "roommatepet = ? and roommategender = ?", nativeQuery = true)
//    List<UidAndRoom> floorPlan2(String yes, String yes2);
//
//
//    @Query(value="select roomnum, user_id from application INNER JOIN (select * from Room_info where " +
//            "type = 3 and space > 0 and space < 3) as t1 using (roomnum) " +
//            "where neat = ? and quite = ? and applicantsmoke = ? and applicantgender = ?" +
//            "and applicantpet = ? and applicantdrink = ? and roommatedrink = ? and " +
//            "roommatepet = ? and roommategender = ?", nativeQuery = true)
//    List<UidAndRoom> floorPlan3(String yes, String yes2);
//
//
//    @Query(value="select roomnum, user_id from application INNER JOIN (select * from Room_info where " +
//            "type = 4 and space > 0 and space < 4) as t1 using (roomnum) " +
//            "where neat = ? and quite = ? and applicantsmoke = ? and applicantgender = ?" +
//            "and applicantpet = ? and applicantdrink = ? and roommatedrink = ? and " +
//            "roommatepet = ? and roommategender = ?", nativeQuery = true)
//    List<UidAndRoom> floorPlan4(String yes, String yes2);
//
//
//    @Query(value="select roomnum, user_id from application INNER JOIN" +
//            "(select * from Room_info where type = 4 and space > 0 and space < 4) as t1 " +
//            "using (roomnum) where applicantsmoke = ?;", nativeQuery = true)
//    List<UidAndRoom> test(String str);
}
