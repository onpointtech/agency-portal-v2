package com.opt.optimum.ui.benefits.survey.so;

import java.time.LocalDate;

public class SurveySO {
	long surveyId;
	String surveyDefinition;
	
	public long getSurveyId() {
		return surveyId;
	}


	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}


	public String getSurveyDefinition() {
		return surveyDefinition;
	}


	public void setSurveyDefinition(String surveyDefinition) {
		this.surveyDefinition = surveyDefinition;
	}


	@Override
	public String toString() {
		return "ClaimantProfileSO [surveyId=" + surveyId + ", surveyDefinition=" + surveyDefinition + "]";
	}
}
