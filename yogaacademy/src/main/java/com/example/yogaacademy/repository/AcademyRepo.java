package com.example.yogaacademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaacademy.model.Academy;

public interface AcademyRepo extends JpaRepository<Academy,Long>{
    
    
}
