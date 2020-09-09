package com.mercury.communityManagement.beans;


public class MatchingData {

    private String floorplan;

    private String applicantgender;

    private String applicantpet;

    private String applicantsmoke;

    private String neat;

    private String quite;

    private String applicantdrink;

    private String roommatedrink;

    private String roommatepet;

    private String roommategender;


    public MatchingData() {
    }

    public MatchingData(String floorplan, String applicantgender, String applicantpet, String applicantsmoke, String neat, String quite, String applicantdrink, String roommatedrink, String roommatepet, String roommategender) {
        this.floorplan = floorplan;
        this.applicantgender = applicantgender;
        this.applicantpet = applicantpet;
        this.applicantsmoke = applicantsmoke;
        this.neat = neat;
        this.quite = quite;
        this.applicantdrink = applicantdrink;
        this.roommatedrink = roommatedrink;
        this.roommatepet = roommatepet;
        this.roommategender = roommategender;
    }

    public String getFloorplan() {
        return floorplan;
    }

    public void setFloorplan(String floorplan) {
        this.floorplan = floorplan;
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

    @Override
    public String toString() {
        return "MatchingData{" +
                "floorplan='" + floorplan + '\'' +
                ", applicantgender='" + applicantgender + '\'' +
                ", applicantpet='" + applicantpet + '\'' +
                ", applicantsmoke='" + applicantsmoke + '\'' +
                ", neat='" + neat + '\'' +
                ", quite='" + quite + '\'' +
                ", applicantdrink='" + applicantdrink + '\'' +
                ", roommatedrink='" + roommatedrink + '\'' +
                ", roommatepet='" + roommatepet + '\'' +
                ", roommategender='" + roommategender + '\'' +
                '}';
    }
}
