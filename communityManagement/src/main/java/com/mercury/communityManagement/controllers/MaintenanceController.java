package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.Maintenance;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.MaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/maintenances")
public class MaintenanceController {

    @Autowired
    private MaintenanceService mService;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<Maintenance> getAll() {
        return mService.getAll();
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/notFinished")
    public List<Maintenance> getNotFinished() {
        return mService.getNotFinished();
    }


    @PreAuthorize("permitAll()")
    @PostMapping
    public Response addMaintenance(@RequestBody Maintenance maintenance) {
        return mService.addMaintenance(maintenance);
    }

    @PreAuthorize("permitAll()")
    @PutMapping
    public Response putMaintenance(@RequestBody Maintenance maintenance) {
        return mService.putMaintenance(maintenance);
    }

}
