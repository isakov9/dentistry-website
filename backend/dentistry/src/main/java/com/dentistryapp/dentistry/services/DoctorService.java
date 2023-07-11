package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Doctor;
import com.dentistryapp.dentistry.repositories.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public List<Doctor> doctorList(){
        return doctorRepository.findAll();
    }
    public Optional<Doctor> getById(Long id){
        return doctorRepository.findById(id);
    }
    public Doctor addDoctor(Doctor doctor)  {
        return doctorRepository.save(doctor);
    }

    public void deleteDoctor(Long id){
         doctorRepository.deleteById(id);
    }

    public Doctor updateDoctor(Doctor doctor, Long id){
        Doctor updatedDoctor = doctorRepository.getReferenceById(id);
        updatedDoctor.setName(doctor.getName());
        updatedDoctor.setLastname(doctor.getLastname());
        updatedDoctor.setSurname(doctor.getSurname());
        updatedDoctor.setEmail(doctor.getEmail());
        updatedDoctor.setAge(doctor.getAge());
        updatedDoctor.setExperience(doctor.getExperience());
        updatedDoctor.setSpeciality(doctor.getSpeciality());
        return doctorRepository.save(updatedDoctor);
    }

}
