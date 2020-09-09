package com.mercury.communityManagement.services;

import com.mercury.communityManagement.beans.EmailUs;
import com.mercury.communityManagement.daos.EmailUsDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailUsService {

    @Autowired
    EmailUsDao euDao;


    public List<EmailUs> getAll() {
        return euDao.findAll();
    }

    public List<EmailUs> getNotReplied(){ return euDao.findNotReplied();}

    public Response addEU(EmailUs eu) {
        try{
            euDao.save(eu);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);
    }

    public Response putEu(EmailUs eu) {
        EmailUs tr = euDao.findById(eu.getId()).get();
        eu.setStatus("replied");
        tr = eu;
        euDao.save(tr);
        return new Response(true);
    }
}
