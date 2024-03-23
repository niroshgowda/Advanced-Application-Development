package com.example.yogaacademy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="course")
public class Course {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long courseId;
    private String courseName;
    private String courseDescription;
    private int courseDuration;

    
}