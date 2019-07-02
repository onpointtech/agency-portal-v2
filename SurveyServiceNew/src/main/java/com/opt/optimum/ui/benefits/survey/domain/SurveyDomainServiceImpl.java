package com.opt.optimum.ui.benefits.survey.domain;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.repo.SurveyRepository;
import com.opt.optimum.ui.benefits.survey.repo.SurveyResponseRepository;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

@Service("SurveyDomainServiceImpl")
public class SurveyDomainServiceImpl implements SurveyDomainService{

	private SurveyRepository surveyRepository;
	private SurveyResponseRepository surveyResponseRepository;
	
	@Autowired
	public SurveyDomainServiceImpl(SurveyRepository surveyRepository, SurveyResponseRepository surveyResponseRepository) {
		this.surveyRepository = surveyRepository;
		this.surveyResponseRepository = surveyResponseRepository;
	}

	@Override
	public long addUpdateSurvey(Survey survey) {
		survey.setLastInsertUpdateTS(OffsetDateTime.now());
		return surveyRepository.save(survey).getSurveyId();
	}

	public Survey getSurveyByName(String surveyName) {
		Survey surveyCheck = surveyRepository.findFirstByName(surveyName);
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
		Collections.sort(allSurveys);
		return allSurveys;
	}

	@Override
	public String submitClaim() {
		return "success";
	}

}
