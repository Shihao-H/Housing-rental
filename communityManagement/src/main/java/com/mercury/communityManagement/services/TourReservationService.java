package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.TourReservation;
import com.mercury.communityManagement.daos.TourReservationDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TourReservationService {

    @Autowired
    TourReservationDao trDao;

    public List<TourReservation> getAll() {
        return trDao.findAll();
    }

    public List<TourReservation> getNotFinished() { return trDao.findNotFinished();}

    public Response addTR(TourReservation tourReservation) {
        try {
            trDao.save(tourReservation);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);
    }

    public Response putTR(TourReservation tourReservation) {
        TourReservation tr = trDao.findById(tourReservation.getId()).get();
        tourReservation.setStatus("finished");
        tr = tourReservation;
        trDao.save(tr);
        return new Response(true);
    }

}
