package com.opt.optimum.ui.benefits.survey.business;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

public interface SurveyBusinessService {

	long addUpdateSurvey(Survey survey);

	Survey getSurveyById(long surveyId);

	List<Survey> getAllSurveys();

	String submitClaim();

	long addResponse(SurveyResponseSO surveyResponseSO);

	List<SurveyResponse> deleteResponse(long claimantId);

	SurveyResponseSO getSurvey(String surveyName, long claimantId);
	
}
