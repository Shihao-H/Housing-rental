package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.Review;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    ReviewService rs;

    @GetMapping
    public List<Review> getReviews() {
        return rs.getAll();
    }

    @PostMapping
    public Response addReviews(@RequestBody Review review){
        return rs.addReview(review);
    }



}
