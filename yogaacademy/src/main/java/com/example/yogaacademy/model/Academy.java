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
@Table(name="academy")
public class Academy {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long academyid;
    private String academyName;
    private String academyDescription;
    private String academyAddress;
    private String mobile;
    private String academyemail;

    
}
