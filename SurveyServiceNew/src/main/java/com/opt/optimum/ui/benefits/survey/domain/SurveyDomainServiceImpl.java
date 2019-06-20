package com.opt.optimum.ui.benefits.survey.domain;

import java.time.OffsetDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.repo.SurveyRepository;

@Service("SurveyDomainServiceImpl")
public class SurveyDomainServiceImpl implements SurveyDomainService{

	private SurveyRepository surveyRepository;
	
	@Autowired
	public SurveyDomainServiceImpl(SurveyRepository surveyRepository) {
		this.surveyRepository = surveyRepository;
	}

	@Override
	public long createSurvey(Survey survey) {
		survey.setLastInsertUpdateTS(OffsetDateTime.now());
		return surveyRepository.save(survey).getSurveyId();
	}

	@Override
	public Survey updateSurvey(Survey updatedSurvey, long surveyId) {
		Survey oldSurvey = getSurveyById(surveyId);
		
		if(updatedSurvey.getSurveyDefinition() != null && updatedSurvey.getSurveyDefinition() != "") {
			oldSurvey.setSurveyDefinition(updatedSurvey.getSurveyDefinition());
		}
		
		return surveyRepository.save(oldSurvey);
	}

	@Override
	public Survey getSurveyById(long surveyId) {
		return surveyRepository.findById(surveyId).get();
	}
	

}
