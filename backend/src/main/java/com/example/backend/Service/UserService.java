package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Here you can add any logic you need before saving the user
        return userRepository.save(user);
    }

    public boolean authenticateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.isPresent() && user.get().getPassword().equals(password);
    }

    public boolean updateUser(Long id, String selectedPlan) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setPurchasedPlan(selectedPlan); // Assuming you have a field selectedPlan in User
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }    
}
