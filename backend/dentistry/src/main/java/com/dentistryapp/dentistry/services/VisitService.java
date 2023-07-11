package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Visit;
import com.dentistryapp.dentistry.repositories.VisitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.*;


@Service
@RequiredArgsConstructor
public class VisitService {
    private final VisitRepository visitRepository;
    public Visit addVisit(Visit visit){

        return  visitRepository.save(visit);
    }

    public List<Integer> reservedHours(LocalDate date, Long id){
        List<Integer> list = new ArrayList<>();
        List<Visit> visits = visitRepository.findAllByDateOfVisitAndDoctor_id(date, id);

        for (Visit visit : visits) {
            list.add(visit.getTime());
        }

        return list;
    }
}
