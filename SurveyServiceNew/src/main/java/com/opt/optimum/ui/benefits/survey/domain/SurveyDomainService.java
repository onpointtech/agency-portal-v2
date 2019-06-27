package com.opt.optimum.ui.benefits.survey.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;

public interface SurveyDomainService {

	long addUpdateSurvey(Survey survey);

	Survey getSurveyById(long surveyId);

	Survey getSurveyByName(Survey survey);

	List<Survey> getAllSurveys();

	String submitClaim();

	long addResponse(SurveyResponse surveyResponse);

	String deleteResponse(long responseId);
	
}
