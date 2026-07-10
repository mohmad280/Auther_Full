package com.Auther.auther_backend.DTO;

import com.Auther.auther_backend.enums.Status;
import lombok.Data;

@Data
public class UpdateUserStatusRequest  {
    private Status status;
}
