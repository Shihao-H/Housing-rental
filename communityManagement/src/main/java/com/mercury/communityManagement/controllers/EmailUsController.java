package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.EmailUs;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.EmailUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emailUss")
public class EmailUsController {

    @Autowired
    private EmailUsService euService;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<EmailUs> getAll() {
        return euService.getAll();
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/notReplied")
    public List<EmailUs> getNotReplied() {
        return euService.getNotReplied();
    }

    @PreAuthorize("permitAll()")
    @PostMapping
    public Response addEU(@RequestBody EmailUs eu) {
        return euService.addEU(eu);
    }

    @PutMapping
    public Response putEu(@RequestBody EmailUs eu) {
        return euService.putEu(eu);
    }



}
