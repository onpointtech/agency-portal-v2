package com.opt.optimum.ui.benefits.survey.domain;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

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
	public long addUpdateSurvey(Survey survey) {
		survey.setLastInsertUpdateTS(OffsetDateTime.now());
		return surveyRepository.save(survey).getSurveyId();
	}

	public Survey getSurveyByName(Survey survey) {
		Survey surveyCheck = surveyRepository.findFirstByName(survey.getName());
		return surveyCheck;
	}

	@Override
	public Survey getSurveyById(long surveyId) {
		return surveyRepository.findById(surveyId).get();
	}

	@Override
	public List<Survey> getAllSurveys() {
		List<Survey> allSurveys = new ArrayList<>();
		surveyRepository.findAll().forEach(e -> allSurveys.add(e));
		return allSurveys;
	}
}
