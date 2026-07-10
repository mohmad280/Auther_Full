package com.Auther.auther_backend.DTO;

import com.Auther.auther_backend.enums.Gender;
import com.Auther.auther_backend.enums.Role;
import com.Auther.auther_backend.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {
    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String firstNameArabic;
    private String middleNameArabic;
    private String lastNameArabic;
    private String Nationality;
    private String nationalNumber;
    private String NameOfUniversity;
    private Gender gender;
    private LocalDate berthOfDate;
    private String specialization;
    private int theAcademicYear;
    private String phone;
    private String email;
    private String location;
    private Role role;
    private Status status;
}
