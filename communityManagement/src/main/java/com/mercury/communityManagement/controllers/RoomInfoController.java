package com.mercury.communityManagement.controllers;


import com.mercury.communityManagement.beans.RoomInfo;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.RoomInfoService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roomInfos")
public class RoomInfoController {

    @Autowired
    private RoomInfoService ri;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<RoomInfo> getAll() {
        return ri.getAll();
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("permitAll()")
    @PutMapping("/add/{roomNum}")
    public Response updateAddPeopleRoomInfo(@PathVariable String roomNum) {
        System.out.println("            :add");
        return ri.updateAddPeopleRoomInfo(roomNum);
    }

    @PreAuthorize("permitAll()")
    @PutMapping("/remove/{roomNum}")
    public Response updateRemovePeopleRoomInfo(@PathVariable String roomNum) {
        System.out.println("            :remove");
        return ri.updateRemovePeopleRoomInfo(roomNum);
    }

}
