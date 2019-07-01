package com.opt.optimum.ui.benefits.survey.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;

public interface SurveyResponseRepository extends CrudRepository<SurveyResponse, Long> {

	SurveyResponse findFirstByClaimantId(long claimantId);

	@Transactional
	Long removeByClaimantId(long claimantId);
	
	@Transactional
	List <SurveyResponse> deleteByClaimantId (long claimantId);
	
}