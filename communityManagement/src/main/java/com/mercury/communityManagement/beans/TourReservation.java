package com.mercury.communityManagement.beans;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "TOUR_RESERVATION")
public class TourReservation {
    @Id
    @SequenceGenerator(name = "tr_seq_gen", sequenceName = "TR_SEQ", allocationSize = 1)
    @GeneratedValue(generator="tr_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String floorplan;

    @Column
    private String phone;

    @Column
    private String email;

    @Column
    private Date date;

    @Column
    private String time;

    @Column
    private String sms;

    @Column
    private String status;

    public TourReservation() {
    }

    public TourReservation(String firstname, String lastname, String floorplan, String phone, String email, Date date, String time, String sms, String status) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.floorplan = floorplan;
        this.phone = phone;
        this.email = email;
        this.date = date;
        this.time = time;
        this.sms = sms;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFloorplan() {
        return floorplan;
    }

    public void setFloorplan(String floorplan) {
        this.floorplan = floorplan;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSms() {
        return sms;
    }

    public void setSms(String sms) {
        this.sms = sms;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "TourReservation{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", floorplan='" + floorplan + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", date=" + date +
                ", time='" + time + '\'' +
                ", sms='" + sms + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
