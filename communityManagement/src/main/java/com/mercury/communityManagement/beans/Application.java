package com.mercury.communityManagement.beans;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Application")
public class Application {

    @Id
    @SequenceGenerator(name = "ap_seq_gen", sequenceName = "AP_SEQ", allocationSize = 1)
    @GeneratedValue(generator="ap_seq_gen", strategy = GenerationType.AUTO)
    private int id;

//    @Column
//    private String user;

//    applicantgender: '',
//    applicantpet: '',
//    applicantsmoke: '',
//    applicantdrink: '',
//    neat: '',
//    quite: '',
//    roommategender: '',
//    roommatedrink: '',
//    roommatepet: '',



    @Column
    private String leaseterm;

    @Column
    private String floorplan;

    @Column
    private String specificroommates;

    @Column
    private String applicantgender;

    @Column
    private String applicantpet;

    @Column
    private String applicantsmoke;

    @Column
    private String neat;

    @Column
    private String quite;

    @Column
    private String applicantdrink;

    @Column
    private String roommatedrink;

    @Column
    private String roommatepet;

    @Column
    private String roommategender;

    @Column
    private String roomnum;

    @Column
    private Date date;

    @Column
    private String status;

//    (cascade = CascadeType.ALL)
    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    public User user;

    public Application() {
    }

    public Application(String leaseterm, String floorplan, String specificroommates, String applicantgender, String applicantpet, String applicantsmoke, String neat, String quite, String applicantdrink, String roommatedrink, String roommatepet, String roommategender, String roomnum, Date date, String status, User user) {
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
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Application{" +
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
                ", user=" + user +
                '}';
    }
}
