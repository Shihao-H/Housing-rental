package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.*;
import com.mercury.communityManagement.daos.ApplicationDao;
import com.mercury.communityManagement.daos.UidAndRoomDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ApplicationService {

    @Autowired
    private ApplicationDao ad;

    private UidAndRoomDao uard = new UidAndRoomDao();


    public List<Application> getAll() {
        return ad.findAll();
    }

    public List<UidAndRoom> matching(MatchingData md)
    {
        return uard.getMatchingResult(md);
    }


    public Response save(Application apply) {
        try{
            ad.save(apply);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);
    }

    public Application getUserApplication(int applicationId){
        List<Application> apps = ad.findAll();
        for(Application app : apps){
            if(app.getUser().getId()==applicationId){
                return app;
            }
        }
        return null;
    }


    public Response putApplication(Application apply){
        try {
//            System.out.println("   ffff:    "+apply.getUser().getId());
//            Application app = ad.findByUser_Id(apply.getUser().getId());
            Application app = ad.findById(apply.getId()).get();
            apply.setUser(app.getUser());
            app = apply;
            ad.save(app);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);
    }

    public List<Application2> getNotFinished() {
        List<Application> holder = ad.getNotFinished();
        List<Application2> results = new ArrayList<>();


        for(Application app : holder){

            Application2 a2 = new Application2(app.getId(), app.getLeaseterm(),
                    app.getFloorplan(), app.getSpecificroommates(), app.getApplicantgender(),
                    app.getApplicantpet(), app.getApplicantsmoke(), app.getNeat(),
                    app.getQuite(), app.getApplicantdrink(), app.getRoommatedrink(),
                    app.getRoommatepet(), app.getRoommategender(), app.getRoomnum(),
                    app.getDate(), app.getStatus(), app.getUser().getId());

            results.add(a2);
        }

        return results;

    }

    public Response putApplication2(int uid, String roomNum) {
        try{

            Application app = ad.findByUser_Id(uid);

            System.out.println("    :    "+app.toString());

            app.setRoomnum(String.valueOf(roomNum));
            app.setStatus("finished");
            ad.save(app);
        }
        catch(Exception e)
        {
            return new Response(false);
        }

        return new Response(true);

    }

    public Response putApplication3(int uid) {
        try{
            Application app = ad.findByUser_Id(uid);
            app.setRoomnum("");
            app.setStatus("dead");
            ad.save(app);
        }
        catch(Exception e)
        {
            return new Response(false);
        }

        return new Response(true);
    }

    public List<Application2> getUserApplicationFinished() {
        List<Application> holder = ad.getFinished();
        List<Application2> results = new ArrayList<>();


        for(Application app : holder){

            Application2 a2 = new Application2(app.getId(), app.getLeaseterm(),
                    app.getFloorplan(), app.getSpecificroommates(), app.getApplicantgender(),
                    app.getApplicantpet(), app.getApplicantsmoke(), app.getNeat(),
                    app.getQuite(), app.getApplicantdrink(), app.getRoommatedrink(),
                    app.getRoommatepet(), app.getRoommategender(), app.getRoomnum(),
                    app.getDate(), app.getStatus(), app.getUser().getId());

            System.out.println(a2.toString());

            results.add(a2);
        }

        return results;

    }
}
