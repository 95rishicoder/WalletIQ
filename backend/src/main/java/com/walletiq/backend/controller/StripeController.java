package com.walletiq.backend.controller;

import com.walletiq.backend.service.StripeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/stripe")
@CrossOrigin(origins = "http://localhost:5173")
public class StripeController {

    private final StripeService stripeService;

    public StripeController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> createCheckout(
            @RequestBody Map<String, Long> request) {

        try {
            Long userId = request.get("userId");

            if (userId == null) {
                return ResponseEntity.badRequest()
                        .body("User ID is required.");
            }

            String checkoutUrl =
                    stripeService.createCheckoutSession(userId);

            return ResponseEntity.ok(
                    Map.of("url", checkoutUrl)
            );

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body("Unable to create checkout session.");
        }
    }
}