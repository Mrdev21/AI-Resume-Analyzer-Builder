package com.airesume.analyzer.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public String analyzeResume(String resumeText) {

        System.out.println("GeminiService called");
        System.out.println("API Key: " + apiKey.substring(0, 5) + "*****");

        Client client = Client.builder()
                .apiKey(apiKey)
                .build();

        String prompt = """
                You are an expert ATS Resume Analyzer.

                Analyze the following resume.

                Return ONLY valid JSON in this format:

                {
                  "atsScore": number,
                  "summary": "...",
                  "strengths": [],
                  "weaknesses": [],
                  "suggestions": []
                }

                Resume:
                """ + resumeText;

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3.1-flash-lite",
                        prompt,
                        null
                );

        System.out.println("Gemini Response: " + response.text());

        return response.text();
    }
}