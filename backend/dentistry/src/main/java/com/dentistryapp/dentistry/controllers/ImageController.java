package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.zip.DataFormatException;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/image")
public class ImageController {

    @Autowired
    private ImageService imageService;
    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file) throws IOException{
        String uploadImage = imageService.uploadImage(file);
        return ResponseEntity.ok(uploadImage);
    }
    @GetMapping("/{fileName}")

    public ResponseEntity<?> downloadImage(@PathVariable String fileName) throws DataFormatException {
        byte[] imageData = imageService.downloadImage(fileName);
        return ResponseEntity.ok(imageData);
    }
}
