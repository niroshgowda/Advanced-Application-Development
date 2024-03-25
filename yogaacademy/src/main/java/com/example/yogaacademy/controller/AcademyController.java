package com.example.yogaacademy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaacademy.model.Academy;
import com.example.yogaacademy.service.AcademyService;

@RestController
@RequestMapping("/api/academy")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping("/createAcademy")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Academy> createAcademy(@NonNull @RequestBody Academy academy) {
        Academy createdAcademy = academyService.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }

    @GetMapping("/readacademy/{academyId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getAcademyById(@PathVariable Long academyId) {
        Optional<Academy> academy = academyService.getAcademyById(academyId);
        return academy.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readacademies")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<List<Academy>> getAllAcademies() {
        List<Academy> academies = academyService.getAllAcademies();
        return new ResponseEntity<>(academies, HttpStatus.OK);
    }

    @PutMapping("/updateAcademy/{academyId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Academy> updateAcademy(@NonNull @PathVariable Long academyId,
            @RequestBody Academy academyUpdateRequest) {
        Academy updated = academyService.updateAcademy(academyId, academyUpdateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/deleteAcademy/{academyId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> removeAcademy(@NonNull @PathVariable Long academyId) {
        academyService.removeAcademy(academyId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
