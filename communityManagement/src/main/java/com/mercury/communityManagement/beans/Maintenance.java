package com.mercury.communityManagement.beans;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "Maintenance")
public class Maintenance {
    @Id
    @SequenceGenerator(name = "maintenance_seq_gen", sequenceName = "MAINTENANCE_SEQ", allocationSize = 1)
    @GeneratedValue(generator="maintenance_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String name;

    @Column
    private int roomNum;

    @Column
    private String doorNum;

    @Column
    private String issue;

    @Column
    private Date date;

    @Column
    private String status;

    public Maintenance() {
    }

    public Maintenance(String name, int roomNum, String doorNum, String issue, Date date, String status) {
        this.name = name;
        this.roomNum = roomNum;
        this.doorNum = doorNum;
        this.issue = issue;
        this.date = date;
        this.status = status;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoomNum() {
        return roomNum;
    }

    public void setRoomNum(int roomNum) {
        this.roomNum = roomNum;
    }

    public String getDoorNum() {
        return doorNum;
    }

    public void setDoorNum(String doorNum) {
        this.doorNum = doorNum;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
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
        return "Maintenance{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", roomNum=" + roomNum +
                ", doorNum='" + doorNum + '\'' +
                ", issue='" + issue + '\'' +
                ", date=" + date +
                ", status='" + status + '\'' +
                '}';
    }
}
