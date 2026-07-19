package com.airesume.analyzer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResumeAnalysisResponse {

    private int atsScore;

    private String summary;

    private List<String> strengths;

    private List<String> weaknesses;

    private List<String> suggestions;

}