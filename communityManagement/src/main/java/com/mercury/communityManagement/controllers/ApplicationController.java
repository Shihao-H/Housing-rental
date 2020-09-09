package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.*;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService as;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<Application> getAll() {
        return as.getAll();
    }

    @GetMapping("/notFinished")
    public List<Application2> getNotFinished() {
        return as.getNotFinished();
    }

    @GetMapping("/finished")
    public List<Application2> getUserApplicationFinished() {
        System.out.println("                :                   ");
        return as.getUserApplicationFinished();
    }

    @PostMapping("/matching")
    public List<UidAndRoom> getQualifiedRoom(@RequestBody MatchingData md)  {
        System.out.println(md.toString());
        return as.matching(md);
    }


    @PutMapping("/add/{uid}/{roomNum}")
    public Response putApplication(@PathVariable("uid") int uid, @PathVariable("roomNum") String roomNum) {
        return as.putApplication2(uid, roomNum);
    }

    @PutMapping("/remove/{uid}")
    public Response putApplication3(@PathVariable("uid") int uid) {
        return as.putApplication3(uid);
    }

    @GetMapping("/{applicationId}")
    public Application getUserApplication(@PathVariable int applicationId) {
        return as.getUserApplication(applicationId);
    }


    @PutMapping
    public Response putApplication(@RequestBody Application apply) {
        return as.putApplication(apply);
    }



}
