package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.RoomInfo;
import com.mercury.communityManagement.daos.RoomInfoDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomInfoService {
    @Autowired
    RoomInfoDao rid;

    public List<RoomInfo> getAll() {
        return rid.findAll();
    }

    public Response updateAddPeopleRoomInfo(String roomNum) {
        RoomInfo o = rid.findByRoomnum(roomNum);
        int space = o.getSpace();

        if(space==0)
            return new Response(false);

        o.setSpace(space-1);
        rid.save(o);

        return new Response(true);
    }

    public Response updateRemovePeopleRoomInfo(String roomNum) {
        RoomInfo o = rid.findByRoomnum(roomNum);
        int space = o.getSpace();

        if(space == Integer.parseInt(String.valueOf(roomNum.charAt(0))))
            return new Response(false);

        o.setSpace(space+1);
        rid.save(o);
        return new Response(true);

    }
}
