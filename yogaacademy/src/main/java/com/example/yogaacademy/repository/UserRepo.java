package com.example.yogaacademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaacademy.model.User;

public interface UserRepo extends JpaRepository<User,Long> {
    public Optional<User>findByEmail(String email);
    
    
}
