package com.dentistryapp.dentistry.repositories;

import com.dentistryapp.dentistry.models.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface VisitRepository extends JpaRepository<Visit,Long> {

    List<Visit> findAllByDateOfVisitAndDoctor_id(LocalDate dateOfVisit, Long doctor_id);

}
