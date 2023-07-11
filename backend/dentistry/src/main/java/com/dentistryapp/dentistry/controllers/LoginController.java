package com.dentistryapp.dentistry.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")

@RequiredArgsConstructor
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody String password){
        if(password.equals("admin")){
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }
}
