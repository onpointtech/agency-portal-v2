package com.opt.optimum.ui.benefits.survey.domain;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.repo.SurveyRepository;
import com.opt.optimum.ui.benefits.survey.repo.SurveyResponseRepository;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

@Service("SurveyResponseDomainServiceImpl")
public class SurveyResponseDomainServiceImpl implements SurveyResponseDomainService{

	private SurveyResponseRepository surveyResponseRepository;
	
	@Autowired
	public SurveyResponseDomainServiceImpl(SurveyResponseRepository surveyResponseRepository) {
		this.surveyResponseRepository = surveyResponseRepository;
	}

	@Override
	public long addResponse(SurveyResponse surveyResponse) {
		return surveyResponseRepository.save(surveyResponse).getResponseId();
	}

	@Override
	public List <SurveyResponse> deleteResponse(long claimantId) {
		return surveyResponseRepository.deleteByClaimantId(claimantId);
	}
	
	@Override
	public SurveyResponse getResponse(long claimantId) {
		return surveyResponseRepository.findFirstByClaimantId(claimantId);
	}
}
