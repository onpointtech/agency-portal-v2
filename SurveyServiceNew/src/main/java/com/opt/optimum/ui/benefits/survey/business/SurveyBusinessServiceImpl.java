package com.opt.optimum.ui.benefits.survey.business;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.domain.SurveyDomainService;
import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.so.SurveySO;

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

	@Override
	public long createSurvey(Survey survey) {
		return surveyDomainService.createSurvey(survey);
	}

	@Override
	public Survey updateSurvey(SurveySO surveySO, long surveyId) {
		ModelMapper modelMapper = new ModelMapper();
		Survey survey = modelMapper.map(surveySO, Survey.class);
		return surveyDomainService.updateSurvey(survey, surveyId);
	}

	@Override
	public Survey getSurveyById(long surveyId) {
		return surveyDomainService.getSurveyById(surveyId);
	}

}
