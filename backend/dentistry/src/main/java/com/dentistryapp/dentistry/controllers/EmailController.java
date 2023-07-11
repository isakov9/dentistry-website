package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.EmailMessage;
import com.dentistryapp.dentistry.services.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity sendEmail(@RequestBody EmailMessage emailMessage){
        System.out.println("123-----------------123");
        emailService.sendMail(emailMessage.getDoctorId(), emailMessage.getSubject(), emailMessage.getPatientId());
        return ResponseEntity.ok("Success");
    }
}
