package com.mercury.communityManagement.daos;

import com.mercury.communityManagement.beans.MatchingData;
import com.mercury.communityManagement.beans.UidAndRoom;
import com.mercury.communityManagement.utils.JdbcUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UidAndRoomDao {


    private String plan2 = "(select * from Room_info where type = 2 and space = 1)";

    private String plan3 = "(select * from Room_info where type = 3 and space > 0 and space < 3)";

    private String plan4 = "(select * from Room_info where type = 4 and space > 0 and space < 4)";

    private String temp = "";
    private String tempNeat = "";
    private String tempQuite = "";
    private String tempSmoke = "";
    private String tempAg = "";
    private String tempAp = "";
    private String tempAd = "";
    private String tempRd = "";
    private String tempRp = "";
    private String tempRg = "";



    public List<UidAndRoom> getMatchingResult(MatchingData md){
//        String sql = "select roomnum, user_id from application INNER JOIN \n" +
//                "(select * from Room_info where type = 4 and space > 0 and space < 4) as t1 \n" +
//                "using (roomnum) where applicantsmoke like '%Yes';";



        temp = plan4;
        if(md.getFloorplan().equals("2x2"))
        {
            temp = plan2;
        }

        if(md.getFloorplan().equals("3x3"))
        {
            temp = plan3;
        }

        if(md.getFloorplan().equals("4x4"))
        {
            temp = plan4;
        }


        tempNeat = "= '"+md.getNeat()+"'";
        tempQuite = "= '"+md.getQuite()+"'";
        tempSmoke = "= '"+md.getApplicantsmoke()+"'";
        tempAg = "= '"+md.getRoommategender()+"'";
        tempAp = "= '"+md.getRoommatepet()+"'";
        tempAd = "= '"+md.getRoommatedrink()+"'";
        tempRd = "= '"+md.getApplicantdrink()+"'";
        tempRp = "= '"+md.getApplicantpet()+"'";
        tempRg = "= '"+md.getApplicantgender()+"'";




        if(md.getNeat().equals(" "))
        {
            tempNeat = "like '%'";
        }

        if(md.getQuite().equals(" "))
        {
            tempQuite = "like '%'";
        }

        if(md.getApplicantsmoke().equals(" "))
        {
            tempSmoke = "like '%'";
        }

        if(md.getRoommategender().equals(" "))
        {
            tempAg = "like '%'";
        }

        if(md.getRoommatepet().equals(" "))
        {
            tempAp = "like '%'";
        }

        if(md.getRoommatedrink().equals(" "))
        {
            tempAd = "like '%'";
        }

        if(md.getApplicantdrink().equals(" "))
        {
            tempRd = "like '%'";
        }

        if(md.getApplicantpet().equals(" "))
        {
            tempRp = "like '%'";
        }

        if(md.getApplicantgender().equals(" "))
        {
            tempRg = "like '%'";
        }




        String sql = "select roomnum, user_id from application INNER JOIN " + temp + " as t1 using (roomnum) " +
                "where neat " + tempNeat + " and quite " + tempQuite + " and applicantsmoke " + tempSmoke + " and applicantgender "
                + tempAg + " and applicantpet " + tempAp + " and applicantdrink " + tempAd + " and roommatedrink " + tempRd + " and " +
                "roommatepet " + tempRp + " and roommategender " + tempRg + " or roommategender = 'dont mind' and status = 'finished'";



        List<UidAndRoom> users= new ArrayList();
        try(Connection connection = JdbcUtil.getConnection();
            PreparedStatement ps = connection.prepareStatement(sql);)
        {



//            ps.setString(1, md.getNeat());
//            ps.setString(2, md.getQuite());
//            ps.setString(3, md.getApplicantsmoke());
//            ps.setString(4, md.getRoommategender());
//            ps.setString(5, md.getRoommatepet());
//            ps.setString(6, md.getRoommatedrink());
//            ps.setString(7, md.getApplicantdrink());
//            ps.setString(8, md.getApplicantpet());
//            ps.setString(9, md.getApplicantgender());
//
//
//            if(md.getRoommategender().equals("don't mind"))
//            {
//                ps.setString(4, "%");
//            }




            System.out.println(ps);

            ResultSet rs = ps.executeQuery();
            //next() 只挪， 不返回
            while(rs.next()) {
                users.add(new UidAndRoom(rs.getString("roomnum"),rs.getInt("user_id")));

            }
            System.out.println(users);

            System.out.println(users.size());

        }catch(Exception e) {
            e.printStackTrace();
        }
        return users;
    }

}
