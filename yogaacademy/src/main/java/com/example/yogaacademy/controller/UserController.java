package com.example.yogaacademy.controller;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaacademy.dto.UpdateRequest;
import com.example.yogaacademy.model.User;
import com.example.yogaacademy.service.UserService;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user ){
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
    }

    @GetMapping("readUser/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String Email){
        Optional<User> user=userService.getUserByEmail(Email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(()-> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/readUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users=userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    @PutMapping("update/{email}")
    public ResponseEntity<User> updateUser(@NonNull @RequestBody @PathVariable String email,
     UpdateRequest updateRequest){
        User updated=userService.updatUser(email, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteUser/{id}")
    public ResponseEntity <Void> removeUser(@NonNull @PathVariable Long id){
        userService.removeUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
