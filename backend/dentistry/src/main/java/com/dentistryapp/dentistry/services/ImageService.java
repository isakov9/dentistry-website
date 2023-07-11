package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Image;
import com.dentistryapp.dentistry.repositories.ImageRepository;
import com.dentistryapp.dentistry.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;
    public String uploadImage(MultipartFile file) throws IOException {
        Image image = imageRepository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if(image != null){
            return "file upload successfully with name: " + file.getOriginalFilename();
        }

        return "unlucky";

    }

    public byte[] downloadImage(String fileName) throws DataFormatException {
        Optional<Image> imageData = imageRepository.findByName(fileName);
        return ImageUtils.decompressImage(imageData.get().getImageData());
    }
}
