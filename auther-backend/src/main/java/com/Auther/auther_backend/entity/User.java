package com.Auther.auther_backend.entity;

import com.Auther.auther_backend.enums.Gender;
import com.Auther.auther_backend.enums.Role;
import com.Auther.auther_backend.enums.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String middleName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String firstNameArabic;

    @Column(nullable = false)
    private String middleNameArabic;

    @Column(nullable = false)
    private String lastNameArabic;

    @Column(nullable = false)
    private String nationality;

    @Column(nullable = false, unique = true)
    private String nationalNumber;

    @Column(nullable = false)
    private String nameOfUniversity;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    private LocalDate berthOfDate;

    @Column(nullable = false)
    private String specialization;

    @Column(nullable = false)
    private Integer theAcademicYear;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String location;                // لواء

    @Enumerated(EnumType.STRING)
    private Role role;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String videoUrl;

    @Column(nullable = false)
    private String password;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
