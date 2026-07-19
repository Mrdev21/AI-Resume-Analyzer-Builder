package com.airesume.analyzer.service;

import com.airesume.analyzer.dto.ResumeAnalysisResponse;
import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;


@Service
@RequiredArgsConstructor   // Agar Lombok use kar rahe ho
public class ResumeService {

    private final GeminiService geminiService;
    private final ObjectMapper objectMapper;

    public ResumeAnalysisResponse analyzeResume(MultipartFile file) throws Exception {

        PDDocument document = Loader.loadPDF(file.getBytes());

        PDFTextStripper stripper = new PDFTextStripper();

        String resumeText = stripper.getText(document);

        document.close();

        //  PDF ka text Gemini ko bhej rhe h
        String aiResponse = geminiService.analyzeResume(resumeText);

        try {
            return objectMapper.readValue(
                    aiResponse,
                    ResumeAnalysisResponse.class
            );
        } catch (Exception e) {
            e.printStackTrace();

            return new ResumeAnalysisResponse(
                    0,
                    "AI response parsing failed.",
                    List.of(),
                    List.of(),
                    List.of("Please try again.")
            );
        }
    }
}