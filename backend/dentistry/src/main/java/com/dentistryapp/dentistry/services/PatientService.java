package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Patient;
import com.dentistryapp.dentistry.repositories.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;

    public Long addPatient(Patient patient){
        return patientRepository.save(patient).getId();
    }
}
