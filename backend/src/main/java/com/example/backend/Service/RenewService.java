package com.example.backend.Service;

import com.example.backend.Model.RenewModel;
import com.example.backend.Repository.RenewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RenewService {

    @Autowired
    private RenewRepository repository;

    public RenewModel saveInsuranceRenewal(RenewModel renewal) {
        return repository.save(renewal);
    }

    public List<RenewModel> getAllRenewals() {
        return repository.findAll();
    }

    public RenewModel getRenewalById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
