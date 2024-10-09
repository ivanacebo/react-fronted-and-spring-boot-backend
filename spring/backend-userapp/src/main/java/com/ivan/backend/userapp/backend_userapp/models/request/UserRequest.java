package com.ivan.backend.userapp.backend_userapp.models.request;

import com.ivan.backend.userapp.backend_userapp.models.dto.IUser;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class UserRequest implements IUser {

    @NotBlank(message = "Username cannot be blank")
    private String username;

    @NotEmpty
    @Email
    private String email;

    private boolean admin;

    public UserRequest() {
    }

    public UserRequest(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    @Override
    public String toString() {
        return "UserRequest [username=" + username + ", email=" + email + "]";
    }

}
