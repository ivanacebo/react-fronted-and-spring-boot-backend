package com.ivan.backend.userapp.backend_userapp.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ivan.backend.userapp.backend_userapp.models.entities.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUsername(String username);

    @Query("select u from User u where u.username=?1")
    Optional<User> getUserByUsername(String username);
}
