package com.mercury.communityManagement.services;


import com.mercury.communityManagement.beans.Review;
import com.mercury.communityManagement.daos.ReviewDao;
import com.mercury.communityManagement.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewDao rd;


    public List<Review> getAll() {
        return rd.findByDate();
    }


    public Response addReview(Review review) {
        System.out.println("    :   "+review.toString());
        try{
            rd.save(review);
        }
        catch(Exception e)
        {
            return new Response(false);
        }
        return new Response(true);

    }
}
