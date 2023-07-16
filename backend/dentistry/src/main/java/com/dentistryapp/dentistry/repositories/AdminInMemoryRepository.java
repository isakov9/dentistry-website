package com.dentistryapp.dentistry.repositories;

import com.dentistryapp.dentistry.models.Admin;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.HashMap;
@Component
public class AdminInMemoryRepository {
    private static final HashMap<String, Admin> REGISTRED_ADMINS = new HashMap<>();

    public Admin findAdminByUsername(final String username){
        return REGISTRED_ADMINS.get(username);
    }

    @PostConstruct
    public void setupUsers() {
        REGISTRED_ADMINS.put("admin", buildCurrentAdmin(
                "admin",
                "$2a$12$xns1DxJZDs71eBiTU28gC.6w6/hTU/VxF9ikgtTwoTU/gXHVWJw42"
            ));
    }

    private static Admin buildCurrentAdmin(final String username, final String password) {
        final Admin currentAdmin = new Admin();
        currentAdmin.setUsername(username);
        currentAdmin.setPassword(password);

        return currentAdmin;
    }
}
