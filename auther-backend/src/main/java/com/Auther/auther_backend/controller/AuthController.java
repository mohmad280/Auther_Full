package com.Auther.auther_backend.controller;

import com.Auther.auther_backend.entity.User;
import com.Auther.auther_backend.repository.UserRepo;
import com.Auther.auther_backend.security.DTOs.LoginRequest;
import com.Auther.auther_backend.security.DTOs.LoginResponse;
import com.Auther.auther_backend.security.DTOs.UserInfo;
import com.Auther.auther_backend.security.jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;
    private final JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException exception) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Bad credentials");
            map.put("status", false);
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }


        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtUtils.generateToken(user);

        LoginResponse response = LoginResponse.builder()
                .token(token)
                .user(UserInfo.builder()
                        .id(user.getId())
                        .firstName(user.getFirstName())
                        .middleName(user.getMiddleName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .role(user.getRole())
                        .build())
                .build();

        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout() {
        return ResponseEntity.ok(
                Map.of("message", "Logged out successfully")
        );
    }
}
