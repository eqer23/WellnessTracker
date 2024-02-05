package edu.iu.wellnessTracker.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/registration")
@AllArgsConstructor
public class ClientRegistrationController {

    ClientRegistrationService clientRegistrationService;

    @PostMapping
    public String register(@RequestBody ClientRegistrationRequest request) {
        System.out.println("--------------------- Registration Happened ---------------------");
        return clientRegistrationService.register(request);
    }
}
