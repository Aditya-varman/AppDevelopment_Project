package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ClaimModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long Claimid;
    
    private String claimType;
    private String policyHolderName;
    private String policyNumber;
    private String dateOfService;
    private String diagnosis;
    private Double totalAmount;
    private String receiptImage;

    public String getClaimType() {
        return claimType;
    }
    public void setClaimType(String claimType) {
        this.claimType = claimType;
    }
    public String getPolicyHolderName() {
        return policyHolderName;
    }
    public void setPolicyHolderName(String policyHolderName) {
        this.policyHolderName = policyHolderName;
    }
    public String getPolicyNumber() {
        return policyNumber;
    }
    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }
    public String getDateOfService() {
        return dateOfService;
    }
    public void setDateOfService(String dateOfService) {
        this.dateOfService = dateOfService;
    }
    public String getDiagnosis() {
        return diagnosis;
    }
    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }
    public Double getTotalAmount() {
        return totalAmount;
    }
    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
    public String getReceiptImage() {
        return receiptImage;
    }
    public void setReceiptImage(String receiptImage) {
        this.receiptImage = receiptImage;
    }

    
}
