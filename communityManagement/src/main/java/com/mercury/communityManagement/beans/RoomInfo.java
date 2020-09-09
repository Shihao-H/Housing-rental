package com.mercury.communityManagement.beans;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "ROOM_INFO")
public class RoomInfo {

    @Id
    @SequenceGenerator(name = "ri_seq_gen", sequenceName = "RI_SEQ", allocationSize = 1)
    @GeneratedValue(generator="ri_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private int type;

    @Column
    private String roomnum;

    @Column
    private int space;

    public RoomInfo() {
    }

    public RoomInfo(int type, String roomnum, int space) {
        this.type = type;
        this.roomnum = roomnum;
        this.space = space;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getRoomnum() {
        return roomnum;
    }

    public void setRoomnum(String roomnum) {
        this.roomnum = roomnum;
    }

    public int getSpace() {
        return space;
    }

    public void setSpace(int space) {
        this.space = space;
    }

    @Override
    public String toString() {
        return "RoomInfo{" +
                "id=" + id +
                ", type=" + type +
                ", roomnum='" + roomnum + '\'' +
                ", space=" + space +
                '}';
    }
}
