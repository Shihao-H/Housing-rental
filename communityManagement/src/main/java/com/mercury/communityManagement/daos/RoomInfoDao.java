package com.mercury.communityManagement.daos;

import com.mercury.communityManagement.beans.RoomInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface RoomInfoDao extends JpaRepository<RoomInfo, Integer> {

    RoomInfo findByRoomnum(String roomnum);
}
