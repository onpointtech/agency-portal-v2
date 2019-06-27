package com.opt.optimum.ui.benefits.survey.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;

public interface SurveyDomainService {

	long addUpdateSurvey(Survey survey);

	Survey getSurveyById(long surveyId);

	Survey getSurveyByName(String surveyName);

	List<Survey> getAllSurveys();

	String submitClaim();

}
