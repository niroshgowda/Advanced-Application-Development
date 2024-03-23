package com.example.yogaacademy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.model.Academy;
import com.example.yogaacademy.repository.AcademyRepo;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepository;

    public Academy createAcademy(@NonNull Academy academy) {
        return academyRepository.save(academy);
    }

    public Optional<Academy> getAcademyById(@NonNull Long academyId) {
        return academyRepository.findById(academyId);
    }

    public List<Academy> getAllAcademies() {
        return academyRepository.findAll();
    }

    public Academy updateAcademy(@NonNull Long academyId, Academy academyUpdateRequest) {
        return academyRepository.findById(academyId)
                .map(existingAcademy -> {
                    existingAcademy.setAcademyName(academyUpdateRequest.getAcademyName());
                    existingAcademy.setAcademyDescription(academyUpdateRequest.getAcademyDescription());
                    existingAcademy.setAcademyAddress(academyUpdateRequest.getAcademyAddress());
                    existingAcademy.setMobile(academyUpdateRequest.getMobile());
                    existingAcademy.setAcademyemail(academyUpdateRequest.getAcademyemail());
                    return academyRepository.save(existingAcademy);
                })
                .orElseThrow(() -> new RuntimeException("Academy not found: " + academyId));
    }

    public void removeAcademy(@NonNull Long academyId) {
        academyRepository.deleteById(academyId);
    }
}
