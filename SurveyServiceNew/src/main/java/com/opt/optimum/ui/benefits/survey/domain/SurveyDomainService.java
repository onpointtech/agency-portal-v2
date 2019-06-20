package com.opt.optimum.ui.benefits.survey.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;

public interface SurveyDomainService {

	long createSurvey(Survey survey);

	Survey updateSurvey(Survey survey, long surveyId);

	Survey getSurveyById(long surveyId);
	
}
