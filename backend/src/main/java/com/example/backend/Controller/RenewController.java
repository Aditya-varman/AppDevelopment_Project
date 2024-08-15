package com.example.backend.Controller;
import com.example.backend.Model.RenewModel;
import com.example.backend.Service.RenewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/renewal")
@CrossOrigin(origins = "http://localhost:3000") // Adjust according to your frontend origin
public class RenewController {

    @Autowired
    private RenewService service;

    @PostMapping
    public ResponseEntity<RenewModel> createRenewal(@RequestBody RenewModel renewal) {
        RenewModel savedRenewal = service.saveInsuranceRenewal(renewal);
        return ResponseEntity.ok(savedRenewal);
    }

    @GetMapping
    public ResponseEntity<List<RenewModel>> getAllRenewals() {
        return ResponseEntity.ok(service.getAllRenewals());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RenewModel> getRenewalById(@PathVariable Long id) {
        RenewModel renewal = service.getRenewalById(id);
        if (renewal == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(renewal);
    }
}
