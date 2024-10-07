package com.ivan.backend.userapp.backend_userapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ivan.backend.userapp.backend_userapp.models.entities.Role;
import com.ivan.backend.userapp.backend_userapp.models.entities.User;
import com.ivan.backend.userapp.backend_userapp.models.request.UserRequest;
import com.ivan.backend.userapp.backend_userapp.repositories.RoleRepository;
import com.ivan.backend.userapp.backend_userapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<Role> optionalRole = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (optionalRole.isPresent()) {
            roles.add(optionalRole.orElseThrow());
        }
        user.setRoles(roles);

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
