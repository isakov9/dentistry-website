package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.Doctor;
import com.dentistryapp.dentistry.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping("/doctor")
    public ResponseEntity<List<Doctor>> doctorList(){
        return ResponseEntity.ok(doctorService.doctorList());
    }
    @GetMapping("/doctor/{id}")
    public ResponseEntity<Optional<Doctor>> doctorById(@PathVariable("id") Long id){
        return ResponseEntity.ok(doctorService.getById(id));
    }
    @PostMapping( "/doctor")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor)  {
        return ResponseEntity.ok(doctorService.addDoctor(doctor));
    }

    @PutMapping("doctor/{id}")
    public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor doctor,
                                             @PathVariable("id") Long id){
        return ResponseEntity.ok(doctorService.updateDoctor(doctor,id));
    }

    @DeleteMapping("doctor/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable("id") Long id){
        doctorService.deleteDoctor(id);
        return ResponseEntity.ok("Doctor with id =" + id + " deleted");
    }

}
