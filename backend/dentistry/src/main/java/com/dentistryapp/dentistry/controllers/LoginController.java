package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.dto.AdminDTO;
import com.dentistryapp.dentistry.dto.ResponseDTO;
import com.dentistryapp.dentistry.session.InMemorySessionRegistry;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api")
public class LoginController {
    @Autowired
    public AuthenticationManager authenticationManager;
    @Autowired
    public InMemorySessionRegistry sessionRegistry;
    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody AdminDTO admin){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(admin.getUsername(), admin.getPassword())
        );
        final String sessionId = sessionRegistry.registerSession(admin.getUsername());
        ResponseDTO response = new ResponseDTO();
        response.setSessionId(sessionId);
        return ResponseEntity.ok(response);
    }
}
