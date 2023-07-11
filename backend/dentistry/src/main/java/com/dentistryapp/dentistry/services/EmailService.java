package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Doctor;
import com.dentistryapp.dentistry.models.Patient;
import com.dentistryapp.dentistry.repositories.DoctorRepository;
import com.dentistryapp.dentistry.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service

public class EmailService {

    private final JavaMailSender mailSender;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;

    public EmailService(JavaMailSender mailSender, DoctorRepository doctorRepository, PatientRepository patientRepository) {
        this.mailSender = mailSender;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
    }
    @Value("${spring.mail.username}")
    private String sender;



    public void sendMail(Long doctorId, String subject, Long patientId){
        Doctor doctor = doctorRepository.getReferenceById(doctorId);
        Patient patient = patientRepository.getReferenceById(patientId);
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(sender);
        simpleMailMessage.setTo(doctor.getEmail());
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText("Имя: " + patient.getLastname() + " Фамилия: " + patient.getName() + "\n\nКомментарий:" + patient.getComment());

        this.mailSender.send(simpleMailMessage);
    }

}
