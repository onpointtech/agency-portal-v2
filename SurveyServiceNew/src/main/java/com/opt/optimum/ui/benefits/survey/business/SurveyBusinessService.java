package com.opt.optimum.ui.benefits.survey.business;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.so.SurveySO;

public interface SurveyBusinessService {

	long addUpdateSurvey(Survey survey);

	Survey getSurveyById(long surveyId);

	List<Survey> getAllSurveys();
	
}
