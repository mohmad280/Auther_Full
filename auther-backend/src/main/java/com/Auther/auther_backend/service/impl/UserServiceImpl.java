package com.Auther.auther_backend.service.impl;

import com.Auther.auther_backend.DTO.CreateUserRequest;

import com.Auther.auther_backend.DTO.UpdateUserRequest;
import com.Auther.auther_backend.DTO.UpdateUserStatusRequest;
import com.Auther.auther_backend.DTO.UserResponse;
import com.Auther.auther_backend.entity.User;

import com.Auther.auther_backend.enums.Role;
import com.Auther.auther_backend.enums.Status;
import com.Auther.auther_backend.repository.UserRepo;
import com.Auther.auther_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createUser(CreateUserRequest request) {
        if(userRepo.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exist");
        }

        User user = User.builder()
                .firstName(request.getFirstName())
                .middleName(request.getMiddleName())
                .lastName(request.getLastName())
                .firstNameArabic(request.getFirstNameArabic())
                .middleNameArabic(request.getMiddleNameArabic())
                .lastNameArabic(request.getLastNameArabic())
                .nationality(request.getNationality())
                .nationalNumber(request.getNationalNumber())
                .nameOfUniversity(request.getNameOfUniversity())
                .gender(request.getGender())
                .role(Role.USER)
                .status(Status.PENDING)
                .berthOfDate(request.getBerthOfDate())
                .specialization(request.getSpecialization())
                .theAcademicYear(request.getTheAcademicYear())
                .phone(request.getPhone())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .location(request.getLocation())
                .imageUrl(request.getImageUrl())
                .videoUrl(request.getVideoUrl())
                .build();

        return mapToResponse(userRepo.save(user));
    }

    @Override
    public UserResponse updateUser(Long id, UpdateUserRequest request) {
        User user = findById(id);


        user.setFirstName(request.getFirstName());
        user.setMiddleName(request.getMiddleName());
        user.setLastName(request.getLastName());

        user.setFirstNameArabic(request.getFirstNameArabic());
        user.setMiddleNameArabic(request.getMiddleNameArabic());
        user.setLastNameArabic(request.getLastNameArabic());

        user.setNationality(request.getNationality());
        user.setNationalNumber(request.getNationalNumber());
        user.setNameOfUniversity(request.getNameOfUniversity());

        user.setGender(request.getGender());

        user.setBerthOfDate(request.getBerthOfDate());

        user.setSpecialization(request.getSpecialization());
        user.setTheAcademicYear(request.getTheAcademicYear());

        user.setPhone(request.getPhone());
        user.setEmail(request.getEmail());

        user.setLocation(request.getLocation());

        user.setImageUrl(request.getImageUrl());
        user.setVideoUrl(request.getVideoUrl());

        return mapToResponse(userRepo.save(user));
    }

    @Override
    public UserResponse updateUserStatus(Long id, UpdateUserStatusRequest request) {
        User user = findById(id);

        user.setStatus(request.getStatus());

        return mapToResponse(userRepo.save(user));
    }

    @Override
    public Page<UserResponse> getAllUser(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());

        Page<User> users = userRepo.findAll(pageable);

        return users.map(this::mapToResponse);

    }

    @Override
    public UserResponse getCurrentUser(String email) {
        User user = findByEmail(email);
        return mapToResponse(user);
    }

    @Override
    public void deleteUser(Long id) {
        User user = findById(id);
        userRepo.delete(user);
    }


    private User findById(Long id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    private User findByEmail(String email) {
        return userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    private UserResponse mapToResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .middleName(user.getMiddleName())
                .lastName(user.getLastName())
                .firstNameArabic(user.getFirstNameArabic())
                .middleNameArabic(user.getMiddleNameArabic())
                .lastNameArabic(user.getLastNameArabic())
                .Nationality(user.getNationality())
                .nationalNumber(user.getNationalNumber())
                .NameOfUniversity(user.getNameOfUniversity())
                .gender(user.getGender())
                .berthOfDate(user.getBerthOfDate())
                .specialization(user.getSpecialization())
                .theAcademicYear(user.getTheAcademicYear())
                .phone(user.getPhone())
                .email(user.getEmail())
                .location(user.getLocation())
                .role(user.getRole())
                .status(user.getStatus())
                .build();
    }
}
