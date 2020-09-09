package com.mercury.communityManagement.services;


import com.mercury.communityManagement.beans.Maintenance;
import com.mercury.communityManagement.daos.MaintenanceDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class MaintenanceService {

    @Autowired
    MaintenanceDao maintenanceDao;


    public List<Maintenance> getAll() {
        return maintenanceDao.findAll();
    }

    public List<Maintenance> getNotFinished() { return maintenanceDao.findNotFinished();}

    public Response addMaintenance(Maintenance maintenance) {
        try{
            maintenanceDao.save(maintenance);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);
    }


    public Response putMaintenance(Maintenance maintenance) {

        Maintenance mm = maintenanceDao.findById(maintenance.getId()).get();
        maintenance.setStatus("finished");
        mm = maintenance;
        maintenanceDao.save(mm);
        return new Response(true);
    }

}
