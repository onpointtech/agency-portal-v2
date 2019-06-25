package com.opt.optimum.ui.benefits.survey.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;

public interface SurveyDomainService {

	long addUpdateSurvey(Survey survey);

	Survey getSurveyById(long surveyId);

	Survey getSurveyByName(Survey survey);

	List<Survey> getAllSurveys();
	
}
