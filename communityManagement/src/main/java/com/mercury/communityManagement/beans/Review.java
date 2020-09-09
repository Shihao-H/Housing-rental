package com.mercury.communityManagement.beans;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "REVIEW")
public class Review {

    @Id
    @SequenceGenerator(name = "review_seq_gen", sequenceName = "REVIEW_SEQ", allocationSize = 1)
    @GeneratedValue(generator="review_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String username;

    @Column
    private int star;

    @Column
    private String comment;

    @Column
    private Date date;

    public Review() {
    }

    public Review(String username, int star, String comment, Date date) {
        this.username = username;
        this.star = star;
        this.comment = comment;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", star=" + star +
                ", comment='" + comment + '\'' +
                ", date=" + date +
                '}';
    }
}
