package com.dentistryapp.dentistry.repositories;

import com.dentistryapp.dentistry.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {

    @Transactional
    Optional<Image> findByDoctor_id(Long id);
}
