package com.mercury.communityManagement.beans;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "EMAIL_US")
public class EmailUs {

    @Id
    @SequenceGenerator(name = "eu_seq_gen", sequenceName = "EU_SEQ", allocationSize = 1)
    @GeneratedValue(generator="eu_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String phone;

    @Column
    private String email;

    @Column
    private String message;

    @Column
    private Date date;

    @Column
    private String status;

    public EmailUs() {

    }

    public EmailUs(String firstname, String lastname, String phone, String email, String message, Date date, String status) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.message = message;
        this.date = date;
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
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

    @Override
    public String toString() {
        return "EmailUs{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                ", date=" + date +
                ", status='" + status + '\'' +
                '}';
    }
}
