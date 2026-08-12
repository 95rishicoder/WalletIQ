package com.walletiq.backend.service;

import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.walletiq.backend.entity.User;
import com.walletiq.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    private final UserRepository userRepository;

    @Value("${stripe.price-id}")
    private String priceId;

    public StripeService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String createCheckoutSession(Long userId) throws Exception {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        SessionCreateParams params =
                SessionCreateParams.builder()
                        .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                        .setCustomerEmail(user.getEmail())
                        .addLineItem(
                                SessionCreateParams.LineItem.builder()
                                        .setPrice(priceId)
                                        .setQuantity(1L)
                                        .build()
                        )
                        .setSubscriptionData(
                                SessionCreateParams.SubscriptionData.builder()
                                        .setTrialPeriodDays(14L)
                                        .build()
                        )
                        .setSuccessUrl("http://localhost:5173/dashboard?subscription=success")
                        .setCancelUrl("http://localhost:5173/dashboard?subscription=cancelled")
                        .build();

        Session session = Session.create(params);

        return session.getUrl();
    }
}