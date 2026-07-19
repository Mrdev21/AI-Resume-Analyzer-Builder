package com.airesume.analyzer.controller;

import com.airesume.analyzer.dto.ResumeAnalysisResponse;
import com.airesume.analyzer.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping(
            value = "/analyze",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResumeAnalysisResponse analyzeResume(
            @RequestParam("file") MultipartFile file
    ) throws Exception {

        return resumeService.analyzeResume(file);
    }

}