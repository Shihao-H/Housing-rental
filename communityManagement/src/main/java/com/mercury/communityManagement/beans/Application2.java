package com.mercury.communityManagement.beans;

import java.sql.Date;


public class Application2 {

    private int id;

    private String leaseterm;

    private String floorplan;

    private String specificroommates;

    private String applicantgender;

    private String applicantpet;

    private String applicantsmoke;

    private String neat;

    private String quite;

    private String applicantdrink;

    private String roommatedrink;

    private String roommatepet;

    private String roommategender;

    private String roomnum;

    private Date date;

    private String status;

    public int user_id;

    public Application2() {
    }

    public Application2(int id, String leaseterm, String floorplan, String specificroommates, String applicantgender, String applicantpet, String applicantsmoke, String neat, String quite, String applicantdrink, String roommatedrink, String roommatepet, String roommategender, String roomnum, Date date, String status, int user_id) {
        this.id = id;
        this.leaseterm = leaseterm;
        this.floorplan = floorplan;
        this.specificroommates = specificroommates;
        this.applicantgender = applicantgender;
        this.applicantpet = applicantpet;
        this.applicantsmoke = applicantsmoke;
        this.neat = neat;
        this.quite = quite;
        this.applicantdrink = applicantdrink;
        this.roommatedrink = roommatedrink;
        this.roommatepet = roommatepet;
        this.roommategender = roommategender;
        this.roomnum = roomnum;
        this.date = date;
        this.status = status;
        this.user_id = user_id;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLeaseterm() {
        return leaseterm;
    }

    public void setLeaseterm(String leaseterm) {
        this.leaseterm = leaseterm;
    }

    public String getFloorplan() {
        return floorplan;
    }

    public void setFloorplan(String floorplan) {
        this.floorplan = floorplan;
    }

    public String getSpecificroommates() {
        return specificroommates;
    }

    public void setSpecificroommates(String specificroommates) {
        this.specificroommates = specificroommates;
    }

    public String getApplicantgender() {
        return applicantgender;
    }

    public void setApplicantgender(String applicantgender) {
        this.applicantgender = applicantgender;
    }

    public String getApplicantpet() {
        return applicantpet;
    }

    public void setApplicantpet(String applicantpet) {
        this.applicantpet = applicantpet;
    }

    public String getApplicantsmoke() {
        return applicantsmoke;
    }

    public void setApplicantsmoke(String applicantsmoke) {
        this.applicantsmoke = applicantsmoke;
    }

    public String getNeat() {
        return neat;
    }

    public void setNeat(String neat) {
        this.neat = neat;
    }

    public String getQuite() {
        return quite;
    }

    public void setQuite(String quite) {
        this.quite = quite;
    }

    public String getApplicantdrink() {
        return applicantdrink;
    }

    public void setApplicantdrink(String applicantdrink) {
        this.applicantdrink = applicantdrink;
    }

    public String getRoommatedrink() {
        return roommatedrink;
    }

    public void setRoommatedrink(String roommatedrink) {
        this.roommatedrink = roommatedrink;
    }

    public String getRoommatepet() {
        return roommatepet;
    }

    public void setRoommatepet(String roommatepet) {
        this.roommatepet = roommatepet;
    }

    public String getRoommategender() {
        return roommategender;
    }

    public void setRoommategender(String roommategender) {
        this.roommategender = roommategender;
    }

    public String getRoomnum() {
        return roomnum;
    }

    public void setRoomnum(String roomnum) {
        this.roomnum = roomnum;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Application2{" +
                "id=" + id +
                ", leaseterm='" + leaseterm + '\'' +
                ", floorplan='" + floorplan + '\'' +
                ", specificroommates='" + specificroommates + '\'' +
                ", applicantgender='" + applicantgender + '\'' +
                ", applicantpet='" + applicantpet + '\'' +
                ", applicantsmoke='" + applicantsmoke + '\'' +
                ", neat='" + neat + '\'' +
                ", quite='" + quite + '\'' +
                ", applicantdrink='" + applicantdrink + '\'' +
                ", roommatedrink='" + roommatedrink + '\'' +
                ", roommatepet='" + roommatepet + '\'' +
                ", roommategender='" + roommategender + '\'' +
                ", roomnum='" + roomnum + '\'' +
                ", date=" + date +
                ", status='" + status + '\'' +
                ", user_id=" + user_id +
                '}';
    }


}
