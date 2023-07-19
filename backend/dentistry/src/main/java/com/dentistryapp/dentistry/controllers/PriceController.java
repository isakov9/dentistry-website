package com.dentistryapp.dentistry.controllers;

import com.dentistryapp.dentistry.models.Price;
import com.dentistryapp.dentistry.services.PriceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api")
@RequiredArgsConstructor
public class PriceController {

    final private PriceService priceService;
    @GetMapping("/price")
    public ResponseEntity<List<Price>> listPrices(){
        return ResponseEntity.ok(priceService.listOfPrices());
    }

    @GetMapping("/price/{id}")
    public ResponseEntity<Optional<Price>> priceById(@PathVariable("id") Long id){
        return ResponseEntity.ok(priceService.getById(id));
    }
    @PostMapping("/price")
    public ResponseEntity<Price> addPrice(@RequestBody Price price){
        return ResponseEntity.ok(priceService.addPrice(price));
    }

    @PutMapping("price/{id}")
    public ResponseEntity<Price> updatePrice(@RequestBody Price price,
                                             @PathVariable("id") Long id){
        return ResponseEntity.ok(priceService.updatePrice(price,id));
    }

    @DeleteMapping("price/{id}")
    public ResponseEntity<String> deletePrice(@PathVariable("id") Long id){
        priceService.deletePrice(id);
        return ResponseEntity.ok("Price with id =" + id + " deleted");
    }
}
