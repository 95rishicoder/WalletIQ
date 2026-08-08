package com.walletiq.backend.controller;

import com.walletiq.backend.dto.LoginRequest;
import com.walletiq.backend.entity.User;
import com.walletiq.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        if (user != null) {
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.badRequest().body("Invalid email or password.");
    }
}