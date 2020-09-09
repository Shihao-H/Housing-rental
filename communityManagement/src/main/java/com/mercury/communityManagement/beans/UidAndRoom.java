package com.mercury.communityManagement.beans;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//@Entity
//@Table(name = "UID_AND_ROOM")
public class UidAndRoom {

//    @Column
    private String roomnum;

//    @Id
    private int user_id;

    public UidAndRoom() {
    }

    public UidAndRoom(String roomnum, int user_id) {
        this.roomnum = roomnum;
        this.user_id = user_id;
    }

    public String getRoomnum() {
        return roomnum;
    }

    public void setRoomnum(String roomnum) {
        this.roomnum = roomnum;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "UidAndRoom{" +
                "roomnum='" + roomnum + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
