package com.ivan.backend.userapp.backend_userapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ivan.backend.userapp.backend_userapp.models.entities.User;
import com.ivan.backend.userapp.backend_userapp.models.entities.UserRequest;
import com.ivan.backend.userapp.backend_userapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Optional<User> update(UserRequest user, Long id) {

        Optional<User> optionalUser = findById(id);
        if (optionalUser.isPresent()) {
            User userDb = optionalUser.orElseThrow();
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());

            return Optional.ofNullable(save(userDb));
        }
        return Optional.empty();
    }

}
