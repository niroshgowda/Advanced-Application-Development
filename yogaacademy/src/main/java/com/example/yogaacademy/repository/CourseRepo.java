package com.example.yogaacademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaacademy.model.Course;

public interface CourseRepo extends JpaRepository<Course, Long> {
    public Optional<Course> findByCourseName(String coursename);
}
