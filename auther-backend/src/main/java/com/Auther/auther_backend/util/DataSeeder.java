package com.Auther.auther_backend.util;

import com.Auther.auther_backend.entity.User;
import com.Auther.auther_backend.enums.Gender;
import com.Auther.auther_backend.enums.Role;
import com.Auther.auther_backend.enums.Status;
import com.Auther.auther_backend.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;


    @Override
    public void run(String... args) throws Exception {

        createUserIfNotExist(
                "Mohmad",
                "Ashraf",
                "Ghanem",
                "محمد",
                "اشرف",
                "غانم",
                "Jordanian",
                "1234567890",
                "Irbid National University",
                Gender.MALE,
                LocalDate.of(2003, 5, 15),
                "Computer Science",
                2,
                "0781114118",
                "mohmadghanem18@gmail.com",
                "Irbid",
                "123456",
                Role.ADMIN,
                Status.SUCCESS
        );

    }





    private void createUserIfNotExist(
            String firstName,
            String middleName,
            String lastName,
            String firstNameArabic,
            String middleNameArabic,
            String lastNameArabic,
            String Nationality,
            String nationalNumber,
            String NameOfUniversity,
            Gender gender,
            LocalDate berthOfDate,
            String specialization,
            int theAcademicYear,
            String phone,
            String email,
            String location,
            String password,
            Role role,
            Status status
    ) {

        if (userRepo.existsByEmail(email)) {
            return;
        }

        User user = User.builder()
                .firstName(firstName)
                .middleName(middleName)
                .lastName(lastName)
                .firstNameArabic(firstNameArabic)
                .middleNameArabic(middleNameArabic)
                .lastNameArabic(lastNameArabic)
                .nationality(Nationality)
                .nationalNumber(nationalNumber)
                .nameOfUniversity(NameOfUniversity)
                .gender(gender)
                .berthOfDate(berthOfDate)
                .specialization(specialization)
                .theAcademicYear(theAcademicYear)
                .phone(phone)
                .email(email)
                .location(location)
                .password(passwordEncoder.encode(password))
                .role(role)
                .status(status)
                .build();

        userRepo.save(user);
    }


}
