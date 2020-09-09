package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.TourReservation;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.TourReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/tourReservations")
public class TourReservationController {

    @Autowired
    private TourReservationService trService;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<TourReservation> getAll() {
        return trService.getAll();
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/notFinished")
    public List<TourReservation> getNotFinished() {
        System.out.println("    :   " + trService.getNotFinished());
        return trService.getNotFinished();
    }

    @PreAuthorize("permitAll()")
    @PostMapping
    public Response addTR(@RequestBody TourReservation tourReservation) {
         return trService.addTR(tourReservation);
    }


    @PreAuthorize("permitAll()")
    @PutMapping
    public Response putTR(@RequestBody TourReservation tourReservation) {
        return trService.putTR(tourReservation);
    }

}

