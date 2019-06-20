package com.opt.optimum.ui.benefits.survey.business;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.so.SurveySO;

public interface SurveyBusinessService {

	long createSurvey(Survey survey);

	Survey updateSurvey(SurveySO surveySO, long surveyId);

	Survey getSurveyById(long surveyId);
	
}
