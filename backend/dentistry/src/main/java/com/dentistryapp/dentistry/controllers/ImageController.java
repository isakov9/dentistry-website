package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.Image;
import com.dentistryapp.dentistry.services.ImageService;
import com.dentistryapp.dentistry.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/image")
public class ImageController {

    @Autowired
    private ImageService imageService;
    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file,
                                         @RequestParam ("id") Long id) throws IOException{
        System.out.println(id);
        String uploadImage = imageService.uploadImage(file, id);
        return ResponseEntity.ok(uploadImage);
    }


    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Long id) throws DataFormatException {

    final Optional<Image> dbImage = imageService.findByDoctor_id(id);

    return ResponseEntity
            .ok()
            .contentType(MediaType.valueOf(dbImage.get().getType()))
            .body(ImageUtils.decompressImage(dbImage.get().getImageData()));
    }
}
