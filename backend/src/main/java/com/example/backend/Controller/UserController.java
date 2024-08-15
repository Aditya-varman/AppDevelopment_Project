package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Service.UserService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/post")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Registration failed: " + e.getMessage());
        }
    }

    @GetMapping("/get/{email}/{password}")
    public ResponseEntity<String> login(@PathVariable String email, @PathVariable String password) {
        boolean isAuthenticated = userService.authenticateUser(email, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Wrong credentials");
        }
    }

    @PutMapping("/updatePlan/{id}")
public ResponseEntity<String> updatePlan(@PathVariable Long id, @RequestBody String selectedPlan) {
    try {
        boolean isUpdated = userService.updateUser(id, selectedPlan);
        if (isUpdated) {
            return ResponseEntity.ok("Plan updated successfully");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    } catch (Exception e) {
        return ResponseEntity.status(500).body("Plan update failed: " + e.getMessage());
    }
}

@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticateUser(user.getEmail(), user.getPassword());
        if (isAuthenticated) {
            Optional<User> loggedInUser = userService.findUserByEmail(user.getEmail());
            return ResponseEntity.ok(loggedInUser.orElse(null));
        } else {
            return ResponseEntity.status(401).body("Wrong credentials");
        }
    }

}
