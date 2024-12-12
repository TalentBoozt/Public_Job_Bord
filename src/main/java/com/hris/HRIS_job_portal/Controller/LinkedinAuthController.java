package com.hris.HRIS_job_portal.Controller;

import com.hris.HRIS_job_portal.Utils.ConfigUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api/v2/linkedin")
public class LinkedinAuthController {
    private static final String LINKEDIN_TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";

    @Autowired
    private ConfigUtility configUtil;

    @PostMapping("/token")
    public ResponseEntity<?> exchangeCodeForToken(@RequestBody Map<String, String> request) {
        String code = request.get("code");

        // Prepare the request to exchange the code for a token
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // Construct the request body for GitHub
        String requestBody = String.format("client_id=%s&client_secret=%s&code=%s",
                configUtil.getProperty("LINKEDIN_CLIENT_ID"),
                configUtil.getProperty("LINKEDIN_CLIENT_SECRET"),
                code);

        // Create the entity for the request
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(LINKEDIN_TOKEN_URL, entity, String.class);

            // Handle the response from GitHub
            if (response.getStatusCode() == HttpStatus.OK) {
                // Extract access token from response body (GitHub returns it as a plain text)
                String accessToken = response.getBody().split("&")[0].split("=")[1];
                return ResponseEntity.ok(Map.of("accessToken", accessToken));
            } else {
                return ResponseEntity.status(response.getStatusCode()).body("Error fetching access token");
            }
        } catch (HttpClientErrorException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getResponseBodyAsString());
        }
    }
}
