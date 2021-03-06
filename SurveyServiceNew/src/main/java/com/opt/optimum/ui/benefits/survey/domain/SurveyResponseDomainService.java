package com.opt.optimum.ui.benefits.survey.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;

public interface SurveyResponseDomainService {

	long addResponse(SurveyResponse surveyResponse);

	List<SurveyResponse> deleteResponse(long claimantId);

	SurveyResponse getResponse(long claimantId);
	
}
