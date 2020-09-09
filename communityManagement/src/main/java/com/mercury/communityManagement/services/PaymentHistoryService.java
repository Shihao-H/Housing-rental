package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.Application;
import com.mercury.communityManagement.beans.Monthly;
import com.mercury.communityManagement.beans.PaymentHistory;
import com.mercury.communityManagement.daos.ApplicationDao;
import com.mercury.communityManagement.daos.PaymentHistoryDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentHistoryService {

    @Autowired
    PaymentHistoryDao phd;

    @Autowired
    ApplicationDao ad;

    public List<PaymentHistory> getAll() {
       return phd.findAll();
    }


    public Response putPaymentHistory(PaymentHistory ph) {
        PaymentHistory app = phd.findById(ph.getId()).get();
        ph.setStatus("paid");
//        ph.setUser(app.getUser());
        app = ph;
        phd.save(app);

        return new Response(true);
    }

//    public Response putApplication(Application apply){
//        Application app = ad.findById(apply.getId()).get();
//        apply.setUser(app.getUser());
//        app = apply;
//        ad.save(app);
//        return new Response(true);
//    }



    public Response addPH(PaymentHistory ph) {
        try{
            phd.save(ph);
        }
        catch(Exception e)
        {
            return new Response(false);
        }

        return new Response(true);
    }

    public List<PaymentHistory> getByUserId(int id) {

        return phd.findByUserId(id);
    }


    public Response addPHs(Monthly month) {
        try {
            List<Application> alist = ad.getFinished();

            for (Application app : alist) {
                if (Integer.parseInt(String.valueOf(app.getRoomnum().charAt(0))) == month.getType()) {
                    PaymentHistory ph = new PaymentHistory(month.getMemo(), month.getAmount(), month.getDate(), "unpaid", app.getUser().getId());
                    phd.save(ph);
                }
            }
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);

    }
}
