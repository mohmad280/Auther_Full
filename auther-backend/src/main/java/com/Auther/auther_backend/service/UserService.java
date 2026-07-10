package com.Auther.auther_backend.service;

import com.Auther.auther_backend.DTO.CreateUserRequest;

import com.Auther.auther_backend.DTO.UpdateUserRequest;
import com.Auther.auther_backend.DTO.UpdateUserStatusRequest;
import com.Auther.auther_backend.DTO.UserResponse;
import org.springframework.data.domain.Page;



public interface UserService {


    UserResponse createUser(CreateUserRequest request);

    UserResponse updateUser(Long id, UpdateUserRequest request);

    UserResponse updateUserStatus(Long id, UpdateUserStatusRequest request);

    Page<UserResponse> getAllUser(int page, int size);


    UserResponse getCurrentUser(String email);

    void deleteUser(Long id);



}
