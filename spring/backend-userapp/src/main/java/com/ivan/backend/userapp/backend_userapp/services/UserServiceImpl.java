package com.ivan.backend.userapp.backend_userapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ivan.backend.userapp.backend_userapp.models.dto.IUser;
import com.ivan.backend.userapp.backend_userapp.models.dto.UserDto;
import com.ivan.backend.userapp.backend_userapp.models.dto.mapper.DtoMapperUser;
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
    public List<UserDto> findAll() {
        List<User> users = (List<User>) userRepository.findAll();

        return users.stream().map(u -> DtoMapperUser.builder().setUser(u).build()).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findById(Long id) {
        return userRepository.findById(id).map(u -> DtoMapperUser.builder().setUser(u).build());
    }

    @Override
    @Transactional
    public UserDto save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setRoles(getRoles(user));

        return DtoMapperUser.builder().setUser(userRepository.save(user)).build();
    }

    @Override
    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Optional<UserDto> update(UserRequest user, Long id) {

        Optional<User> o = userRepository.findById(id);
        User userOptional = null;
        if (o.isPresent()) {

            User userDb = o.orElseThrow();
            userDb.setRoles(getRoles(user));
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());
            userOptional = userRepository.save(userDb);
        }
        return Optional.ofNullable(DtoMapperUser.builder().setUser(userOptional).build());
    }

    private List<Role> getRoles(IUser user) {
        Optional<Role> optionalUsuario = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (optionalUsuario.isPresent()) {
            roles.add(optionalUsuario.orElseThrow());
        }

        if (user.isAdmin()) {
            Optional<Role> optionalAdmin = roleRepository.findByName("ROLE_ADMIN");
            if (optionalAdmin.isPresent()) {
                roles.add(optionalAdmin.orElseThrow());
            }
        }

        return roles;
    }

}
