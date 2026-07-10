package com.Auther.auther_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

    @GetMapping("/hi")
    public String hello() {
        return "Hello ,World";
    }
}
