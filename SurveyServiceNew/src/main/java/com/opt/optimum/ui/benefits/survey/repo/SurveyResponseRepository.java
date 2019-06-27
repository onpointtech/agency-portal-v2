package com.opt.optimum.ui.benefits.survey.repo;

import org.springframework.data.repository.CrudRepository;

import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;

public interface SurveyResponseRepository extends CrudRepository<SurveyResponse, Long> {

	SurveyResponse findFirstByClaimantId(long claimantId);
	
}