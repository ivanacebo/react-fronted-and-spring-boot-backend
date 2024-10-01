package com.ivan.backend.userapp.backend_userapp.services;

import java.util.List;
import java.util.Optional;

import com.ivan.backend.userapp.backend_userapp.models.entities.User;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(User user, Long id);

    void remove(Long id);
}
