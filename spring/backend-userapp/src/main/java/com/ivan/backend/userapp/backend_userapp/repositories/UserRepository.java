package com.ivan.backend.userapp.backend_userapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ivan.backend.userapp.backend_userapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
