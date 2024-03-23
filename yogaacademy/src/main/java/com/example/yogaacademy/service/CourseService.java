package com.example.yogaacademy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.model.Course;
import com.example.yogaacademy.repository.CourseRepo;


@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepository;

    // newCourse
    public Course createCourse(@NonNull Course course) {
        return courseRepository.save(course);
    }

    // getCourse
    public Optional<Course> getCourseByName(String courseName) {
        return courseRepository.findByCourseName(courseName);
    }

    // getCourses
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // updateCourse
    public Course updateCourse(@NonNull String courseName, Course course) {
        return courseRepository.findByCourseName(courseName)
                .map(existingCourse -> {
                    existingCourse.setCourseDuration(course.getCourseDuration());
                    existingCourse.setCourseName(course.getCourseName());
                    existingCourse.setCourseDescription(course.getCourseDescription());
                    return courseRepository.save(existingCourse);
                })
                .orElseThrow(() -> new RuntimeException("Course not found: " + courseName));
    }

    // deleteUser
    public void removeCourse(@NonNull Long courseId) {
        courseRepository.deleteById(courseId);
    }
}
