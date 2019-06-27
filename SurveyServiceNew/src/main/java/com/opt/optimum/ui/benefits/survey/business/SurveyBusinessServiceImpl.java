package com.opt.optimum.ui.benefits.survey.business;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.domain.SurveyDomainService;
import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

@Service
public class SurveyBusinessServiceImpl implements SurveyBusinessService{

	private ModelMapper modelMapper;
	
	private SurveyDomainService surveyDomainService;
	
	private static final Logger logger = LoggerFactory.getLogger(SurveyBusinessServiceImpl.class);
	
	@Autowired
	public SurveyBusinessServiceImpl(ModelMapper modelMapper,
			SurveyDomainService surveyDomainService) {
		this.modelMapper = modelMapper;
		this.surveyDomainService = surveyDomainService;
	}

	public long addUpdateSurvey(Survey survey) {
		if(getSurveyByName(survey) != null) {
			Survey oldSurvey = getSurveyByName(survey);
			
			if(survey.getSurveyDefinition() != null && survey.getSurveyDefinition() != "") {
				oldSurvey.setSurveyDefinition(survey.getSurveyDefinition());
			}
			return surveyDomainService.addUpdateSurvey(oldSurvey);
		} else {
			return surveyDomainService.addUpdateSurvey(survey);
		}
	}

	@Override
	public Survey getSurveyById(long surveyId) {
		return surveyDomainService.getSurveyById(surveyId);
	}
	
	public Survey getSurveyByName(Survey survey) {
		return surveyDomainService.getSurveyByName(survey);
	}

	public List<Survey> getAllSurveys() {
		return surveyDomainService.getAllSurveys();
	}

	@Override
	public String submitClaim() {
		return surveyDomainService.submitClaim();
	}

	@Override
	public long addResponse(SurveyResponseSO surveyResponseSO) {
		ModelMapper modelMapper = new ModelMapper();
		SurveyResponse surveyResponse = modelMapper.map(surveyResponseSO, SurveyResponse.class);
		return surveyDomainService.addResponse(surveyResponse);
	}

	@Override
	public String deleteResponse(long responseId) {
		return surveyDomainService.deleteResponse(responseId);
	}

}
