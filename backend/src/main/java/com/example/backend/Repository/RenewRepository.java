package com.example.backend.Repository;

import com.example.backend.Model.RenewModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RenewRepository extends JpaRepository<RenewModel, Long> {
}
