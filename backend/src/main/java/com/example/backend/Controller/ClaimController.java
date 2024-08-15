package com.example.backend.Controller;

import com.example.backend.Model.ClaimModel;
import com.example.backend.Service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/claims")
@CrossOrigin(origins = "http://localhost:3000")
public class ClaimController {

    @Autowired
    private ClaimService claimService;

    @PostMapping
    public ClaimModel createClaim(@RequestBody ClaimModel claimModel) {
        return claimService.createClaim(claimModel);
    }

    @GetMapping
    public List<ClaimModel> getAllClaims() {
        return claimService.getAllClaims();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClaimModel> getClaimById(@PathVariable Long id) {
        return claimService.getClaimById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClaimModel> updateClaim(@PathVariable Long id, @RequestBody ClaimModel claimDetails) {
        return ResponseEntity.ok(claimService.updateClaim(id, claimDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClaim(@PathVariable Long id) {
        claimService.deleteClaim(id);
        return ResponseEntity.noContent().build();
    }
}
