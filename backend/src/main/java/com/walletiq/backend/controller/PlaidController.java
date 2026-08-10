package com.walletiq.backend.controller;

import com.plaid.client.model.CountryCode;
import com.plaid.client.model.ItemPublicTokenExchangeRequest;
import com.plaid.client.model.ItemPublicTokenExchangeResponse;
import com.plaid.client.model.LinkTokenCreateRequest;
import com.plaid.client.model.LinkTokenCreateRequestUser;
import com.plaid.client.model.LinkTokenCreateResponse;
import com.plaid.client.model.Products;
import com.plaid.client.request.PlaidApi;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/plaid")
public class PlaidController {

    private final PlaidApi plaidApi;

    public PlaidController(PlaidApi plaidApi) {
        this.plaidApi = plaidApi;
    }

    @PostMapping("/link-token")
    public LinkTokenCreateResponse createLinkToken() throws IOException {

        LinkTokenCreateRequestUser user =
                new LinkTokenCreateRequestUser()
                        .clientUserId("walletiq-test-user");

        LinkTokenCreateRequest request =
                new LinkTokenCreateRequest()
                        .user(user)
                        .clientName("WalletIQ")
                        .products(List.of(Products.TRANSACTIONS))
                        .countryCodes(List.of(CountryCode.US))
                        .language("en");

        return plaidApi
                .linkTokenCreate(request)
                .execute()
                .body();
    }

    @PostMapping("/exchange-token")
    public Map<String, String> exchangePublicToken(
            @RequestBody Map<String, String> requestBody) throws IOException {

        String publicToken = requestBody.get("public_token");

        if (publicToken == null || publicToken.isBlank()) {
            throw new IllegalArgumentException("public_token is required");
        }

        ItemPublicTokenExchangeRequest exchangeRequest =
                new ItemPublicTokenExchangeRequest()
                        .publicToken(publicToken);

        ItemPublicTokenExchangeResponse response =
                plaidApi
                        .itemPublicTokenExchange(exchangeRequest)
                        .execute()
                        .body();

        if (response == null) {
            throw new IllegalStateException("Plaid returned an empty response");
        }

        System.out.println("Plaid Item connected successfully.");
        System.out.println("Item ID: " + response.getItemId());

        // IMPORTANT:
        // The access token is intentionally NOT returned to the frontend.
        // We will store it securely in the backend/database in the next step.

        return Map.of(
                "status", "success",
                "item_id", response.getItemId()
        );
    }
}