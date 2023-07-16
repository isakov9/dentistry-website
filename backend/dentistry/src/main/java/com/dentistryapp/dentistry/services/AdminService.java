package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Admin;
import com.dentistryapp.dentistry.repositories.AdminInMemoryRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminService implements UserDetailsService {
    private final AdminInMemoryRepository adminRepository;

    public AdminService(AdminInMemoryRepository adminRepository) {
        this.adminRepository = adminRepository;
    }


    @Override
    public Admin loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin currentAdmin = adminRepository.findAdminByUsername(username);
        if(currentAdmin == null ){
            throw new UsernameNotFoundException("Failed to find admin with username: " +  username);
        }
        return currentAdmin;
    }
}
