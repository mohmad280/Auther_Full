package com.Auther.auther_backend.DTO;

import com.Auther.auther_backend.enums.Gender;
import com.Auther.auther_backend.enums.Role;
import com.Auther.auther_backend.enums.Status;
import jakarta.validation.constraints.*;

import lombok.Data;

import java.time.LocalDate;


@Data
public class CreateUserRequest {

    @NotBlank(message = "First name is mandatory")
    @Size(min = 2 , max = 15)
    private String firstName;

    @NotBlank(message = "Middle name is mandatory")
    @Size(min = 2 , max = 15)
    private String middleName;

    @NotBlank(message = "Last name is mandatory")
    @Size(min = 2 , max = 15)
    private String lastName;

    @NotBlank(message = "First name is mandatory")
    @Size(min = 2 , max = 15)
    private String firstNameArabic;

    @NotBlank(message = "Middle name is mandatory")
    @Size(min = 2 , max = 15)
    private String middleNameArabic;

    @NotBlank(message = "Last name is mandatory")
    @Size(min = 2 , max = 15)
    private String lastNameArabic;

    @NotBlank(message = "Nationality is mandatory")
    private String nationality;

    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "National number must be 10 digits"
    )
    @NotBlank(message = "National number mandatory")
    private String nationalNumber;

    @NotBlank(message = "Name of university mandatory")
    @Size(min = 4, max = 50)
    private String nameOfUniversity;

    @NotNull(message = "Gender is mandatory")
    private Gender gender;





    @NotNull(message = "Berth of date is mandatory")
    private LocalDate berthOfDate;

    @NotBlank(message = "Specialization is mandatory")
    private String specialization;

    @NotNull(message = "The academic year is mandatory")
    private Integer theAcademicYear;

    @Pattern(
            regexp = "^[0-9]{9,15}$",
            message = "Phone number must contain only digits"
    )
    @NotBlank(message = "Phone is mandatory")
    private String phone;

    @NotBlank(message = "Email is mandatory")
    @Email
    private String email;

    @NotBlank(message = "Password is mandatory")
    @Size(min = 6, max = 60)
    private String password;

    @NotBlank(message = "Location is mandatory")
    private String location;

    @NotBlank(message = "Image is mandatory")
    private String imageUrl;

    @NotBlank(message = "Video is mandatory")
    private String videoUrl;
}
