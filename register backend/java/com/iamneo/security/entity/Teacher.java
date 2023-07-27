package com.iamneo.security.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {
	@Id

	private int teacher_id;
	private String teacher_name;
	private String dept_name;
	private String subject_name;

}

