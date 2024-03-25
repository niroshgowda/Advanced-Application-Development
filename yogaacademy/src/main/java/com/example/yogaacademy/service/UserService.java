package com.example.yogaacademy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.dto.UpdateRequest;
import com.example.yogaacademy.model.User;
import com.example.yogaacademy.repository.UserRepo;


@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //newUser
    public User createUser(@NonNull User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
 
    //getUser
    public Optional<User> getUserByEmail(String email){
        return userRepo.findByEmail(email);
    }

    //getUsers
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    //updateUSer
    public User updatUser(@NonNull String email, UpdateRequest updateRequest){
        return userRepo.findByEmail(email)
              .map(existingUser ->{
                existingUser.setUsername(updateRequest.getUsername());
                existingUser.setEmail(updateRequest.getEmail());
                existingUser.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                return userRepo.save(existingUser);
              })
              .orElseThrow(() -> new RuntimeException("User not found"));
    }

    //deleteUser
    public void removeUser(@NonNull Long id){
        userRepo.deleteById(id);
    }
}
