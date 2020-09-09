package com.mercury.communityManagement.controllers;

import com.mercury.communityManagement.beans.Monthly;
import com.mercury.communityManagement.beans.PaymentHistory;
import com.mercury.communityManagement.http.Response;
import com.mercury.communityManagement.services.PaymentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paymentHistories")
public class PaymentHistoryController {

    @Autowired
    private PaymentHistoryService paymentHistoryService;

    @GetMapping
    public List<PaymentHistory> getAll() {
        return paymentHistoryService.getAll();
    }

    @GetMapping("/{user_id}")
    public List<PaymentHistory> getByUserId(@PathVariable int user_id) {
        return paymentHistoryService.getByUserId(user_id);
    }


    @PostMapping
    public Response addPH(@RequestBody PaymentHistory ph) {
        System.out.println("    :   ");

        return paymentHistoryService.addPH(ph);
    }

    @PutMapping
    public Response putPaymentHistory(@RequestBody PaymentHistory eu) {
        return paymentHistoryService.putPaymentHistory(eu);
    }


    @PostMapping("/s")
    public Response addPHs(@RequestBody Monthly month) {
        return paymentHistoryService.addPHs(month);
    }





}
