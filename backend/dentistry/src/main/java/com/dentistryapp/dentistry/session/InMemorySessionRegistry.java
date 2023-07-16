package com.dentistryapp.dentistry.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.UUID;

@Component
public class InMemorySessionRegistry {
    public static final HashMap<String,String> SESSIONS = new HashMap<>();

    public String registerSession(final String username){
        if (username == null){
            throw new RuntimeException("Username to be provided");
        }

        final String sessionId = generatedSessionId();
        SESSIONS.put(sessionId,username);
        System.out.println(SESSIONS);
        return sessionId;
    }

    public String getUsernameForSession(final String sessionId){
        return SESSIONS.get(sessionId);
    }
    private String generatedSessionId(){
        return new String(
                Base64.getEncoder().encode(UUID.randomUUID().toString().getBytes(StandardCharsets.UTF_8))
        );
    }
}
