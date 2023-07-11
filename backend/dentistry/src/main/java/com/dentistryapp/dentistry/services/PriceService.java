package com.dentistryapp.dentistry.services;

import com.dentistryapp.dentistry.models.Price;
import com.dentistryapp.dentistry.repositories.PriceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PriceService {

    private final PriceRepository priceRepository;

    public List<Price> listOfPrices(){
        return priceRepository.findAll();
    }

    public Optional<Price> getById(Long id){
        return priceRepository.findById(id);
    }
    public Price addPrice(Price price){
        return  priceRepository.save(price);
    }

    public Price updatePrice(Price price, Long id){
        Price updatedPrice = priceRepository.getReferenceById(id);
        updatedPrice.setName(price.getName());
        updatedPrice.setPrice(price.getPrice());

        return priceRepository.save(updatedPrice);
    }

    public void deletePrice(Long id){
        priceRepository.deleteById(id);
    }
}
