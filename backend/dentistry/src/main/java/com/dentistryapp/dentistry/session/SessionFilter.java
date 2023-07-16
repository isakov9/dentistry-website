package com.dentistryapp.dentistry.session;

import com.dentistryapp.dentistry.models.Admin;
import com.dentistryapp.dentistry.services.AdminService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Component
public class SessionFilter extends OncePerRequestFilter {

    private InMemorySessionRegistry inMemorySessionRegistry;

    private final AdminService adminService;
    @Autowired
    public SessionFilter(final InMemorySessionRegistry inMemorySessionRegistry,
                         final AdminService adminService) {
        this.inMemorySessionRegistry = inMemorySessionRegistry;
        this.adminService = adminService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        final String sessionId = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(sessionId == null || sessionId.length() == 0){
            filterChain.doFilter(request,response);
            System.out.println("SessionId is null");
            return;
        }

        final String username = inMemorySessionRegistry.getUsernameForSession(sessionId);
        if (username == null){
            filterChain.doFilter(request,response);
            System.out.println("Username is null");
            return;
        }

        Admin currentAdmin = adminService.loadUserByUsername(username);

        final UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                currentAdmin,
                null,
                currentAdmin.getAuthorities()
        );

        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(auth);


        filterChain.doFilter(request,response);
    }
}
