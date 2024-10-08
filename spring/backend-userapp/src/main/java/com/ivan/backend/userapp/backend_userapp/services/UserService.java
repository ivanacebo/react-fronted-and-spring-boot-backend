package com.ivan.backend.userapp.backend_userapp.services;

import java.util.List;
import java.util.Optional;

import com.ivan.backend.userapp.backend_userapp.models.dto.UserDto;
import com.ivan.backend.userapp.backend_userapp.models.entities.User;
import com.ivan.backend.userapp.backend_userapp.models.request.UserRequest;

public interface UserService {

    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);

    Optional<UserDto> update(UserRequest user, Long id);

    void remove(Long id);
}
