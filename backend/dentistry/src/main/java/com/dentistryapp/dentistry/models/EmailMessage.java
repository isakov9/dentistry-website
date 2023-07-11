package com.dentistryapp.dentistry.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailMessage {
    
    private Long doctorId;
    private String subject;
    private Long patientId;

}
