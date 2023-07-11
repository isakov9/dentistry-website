package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.Visit;
import com.dentistryapp.dentistry.services.VisitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api")
@RequiredArgsConstructor
public class VisitController {
    final private VisitService visitService;


    @PostMapping("/visit")
    public ResponseEntity<Visit> addVisit(@RequestBody Visit visit){
        return ResponseEntity.ok(visitService.addVisit(visit));
    }

    @GetMapping ("/visit")
    public ResponseEntity<List<Integer>> reservedHours(@RequestParam ("id") Long id,
                                                       @RequestParam ("date") String dateStr){
        LocalDate date = LocalDate.parse(dateStr);
        return ResponseEntity.ok(visitService.reservedHours(date, id));
    }

}
