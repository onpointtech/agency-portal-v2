package com.opt.optimum.ui.benefits.survey.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class SurveyResponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long responseId;
	long claimantId;
	@Size(min = 1, max = 9999)
	String surveyResponse;
	String surveyName;
	
	
	public long getResponseId() {
		return responseId;
	}
	public void setResponseId(long responseId) {
		this.responseId = responseId;
	}
	public long getClaimantId() {
		return claimantId;
	}
	public void setClaimantId(long claimantId) {
		this.claimantId = claimantId;
	}
	public String getSurveyResponse() {
		return surveyResponse;
	}
	public void setSurveyResponse(String surveyResponse) {
		this.surveyResponse = surveyResponse;
	}
	public String getSurveyName() {
		return surveyName;
	}
	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}
}