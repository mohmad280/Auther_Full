package com.Auther.auther_backend.security.DTOs;

import com.Auther.auther_backend.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserInfo {
    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private Role role;
}
