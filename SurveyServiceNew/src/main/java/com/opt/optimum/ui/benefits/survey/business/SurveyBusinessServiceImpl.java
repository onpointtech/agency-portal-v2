package com.opt.optimum.ui.benefits.survey.business;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.domain.SurveyDomainService;
import com.opt.optimum.ui.benefits.survey.domain.SurveyResponseDomainService;
import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

@Service
public class SurveyBusinessServiceImpl implements SurveyBusinessService{

	private ModelMapper modelMapper;
	
	private SurveyDomainService surveyDomainService;
	private SurveyResponseDomainService surveyResponseDomainService;

	
	private static final Logger logger = LoggerFactory.getLogger(SurveyBusinessServiceImpl.class);
	
	@Autowired
	public SurveyBusinessServiceImpl(ModelMapper modelMapper,
			SurveyDomainService surveyDomainService, SurveyResponseDomainService surveyResponseDomainService ) {
		this.modelMapper = modelMapper;
		this.surveyDomainService = surveyDomainService;
		this.surveyResponseDomainService = surveyResponseDomainService;
	}

	public long addUpdateSurvey(Survey survey) {
		if(getSurveyByName(survey.getName()) != null) {
			Survey oldSurvey = getSurveyByName(survey.getName());
			
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
	
	public Survey getSurveyByName(String surveyName) {
		return surveyDomainService.getSurveyByName(surveyName);
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
		return surveyResponseDomainService.addResponse(surveyResponse);
	}

	@Override
	public List <SurveyResponse> deleteResponse(long claimantId) {
		return surveyResponseDomainService.deleteResponse(claimantId);
	}

	@Override
	public SurveyResponseSO getSurvey(String surveyName, long claimantId) {
		// check if may survey response

		SurveyResponseSO surveyResponseSO = new SurveyResponseSO();
		SurveyResponse surveyResponse = surveyResponseDomainService.getResponse(claimantId);
		
		Survey survey = getSurveyByName(surveyName);
		
		if(surveyResponse != null) {
			surveyResponseSO = modelMapper.map(surveyResponse, SurveyResponseSO.class);
		}
		surveyResponseSO.setSurveyDefinition(survey.getSurveyDefinition());
		surveyResponseSO.setSurveyName(survey.getName());
		return surveyResponseSO;
	}

}
