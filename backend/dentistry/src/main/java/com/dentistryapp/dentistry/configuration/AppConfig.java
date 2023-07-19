package com.dentistryapp.dentistry.configuration;

import com.dentistryapp.dentistry.session.SessionFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.CorsConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;


@Configuration
@EnableWebSecurity
public class AppConfig {

    @Autowired
    private SessionFilter sessionFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedMethods(List.of("DELETE", "PUT", "GET", "POST"));

        http.csrf(AbstractHttpConfigurer::disable)
                .cors().configurationSource(request -> corsConfig.applyPermitDefaultValues());
        http
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/api/login").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/doctor").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/price").permitAll()
                        .requestMatchers( "/api/visit").permitAll()
                        .requestMatchers( "/api/patient").permitAll()
                        .requestMatchers( "/api/send-email").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/image/**").permitAll()
                        .anyRequest().authenticated()

                );
        http
                .addFilterBefore(
                        sessionFilter,
                        UsernamePasswordAuthenticationFilter.class
                );
        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
