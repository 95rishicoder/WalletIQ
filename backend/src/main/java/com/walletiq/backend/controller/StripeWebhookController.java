package com.walletiq.backend.controller;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stripe")
public class StripeWebhookController {

    @Value("${stripe.webhook-secret:}")
    private String webhookSecret;

    @PostMapping("/webhook")
    public ResponseEntity<String> handleWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String signature) {

        try {
            Event event = Webhook.constructEvent(
                    payload,
                    signature,
                    webhookSecret
            );

            System.out.println("Stripe event received: " + event.getType());

            switch (event.getType()) {

                case "customer.subscription.created":
                    System.out.println("Subscription created");
                    break;

                case "customer.subscription.updated":
                    System.out.println("Subscription updated");
                    break;

                case "customer.subscription.deleted":
                    System.out.println("Subscription cancelled");
                    break;

                case "invoice.paid":
                    System.out.println("Invoice paid");
                    break;

                case "invoice.payment_failed":
                    System.out.println("Invoice payment failed");
                    break;

                default:
                    System.out.println("Unhandled Stripe event: " + event.getType());
                    break;
            }

            return ResponseEntity.ok("Webhook received");

        } catch (SignatureVerificationException e) {

            return ResponseEntity.badRequest()
                    .body("Invalid Stripe signature.");

        } catch (Exception e) {

            return ResponseEntity.internalServerError()
                    .body("Webhook processing failed.");
        }
    }
}