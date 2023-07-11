package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.Patient;
import com.dentistryapp.dentistry.services.PatientService;
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
public class PatientController {

    final private PatientService patientService;

    @PostMapping("/patient")
    public ResponseEntity<Long> addPatient(@RequestBody Patient patient){
        return ResponseEntity.ok(patientService.addPatient(patient));
    }
}
