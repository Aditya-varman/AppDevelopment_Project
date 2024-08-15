// src/main/java/com/example/backend/service/ClaimService.java
package com.example.backend.Service;

import com.example.backend.Model.ClaimModel;
import com.example.backend.Repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClaimService {

    @Autowired
    private ClaimRepository claimRepository;

    public ClaimModel createClaim(ClaimModel claimModel) {
        return claimRepository.save(claimModel);
    }

    public List<ClaimModel> getAllClaims() {
        return claimRepository.findAll();
    }

    public Optional<ClaimModel> getClaimById(Long id) {
        return claimRepository.findById(id);
    }

    public ClaimModel updateClaim(Long id, ClaimModel claimDetails) {
        return claimRepository.findById(id).map(claim -> {
            claim.setClaimType(claimDetails.getClaimType());
            claim.setPolicyHolderName(claimDetails.getPolicyHolderName());
            claim.setPolicyNumber(claimDetails.getPolicyNumber());
            claim.setDateOfService(claimDetails.getDateOfService());
            claim.setDiagnosis(claimDetails.getDiagnosis());
            claim.setTotalAmount(claimDetails.getTotalAmount());
            claim.setReceiptImage(claimDetails.getReceiptImage());
            return claimRepository.save(claim);
        }).orElseThrow(() -> new RuntimeException("Claim not found with id " + id));
    }

    public void deleteClaim(Long id) {
        claimRepository.deleteById(id);
    }
}
