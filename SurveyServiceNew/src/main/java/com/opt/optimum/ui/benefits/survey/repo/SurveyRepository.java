package com.opt.optimum.ui.benefits.survey.repo;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.repository.CrudRepository;

import com.opt.optimum.ui.benefits.survey.entity.Survey;

public interface SurveyRepository extends CrudRepository<Survey, Long> {

	Survey findFirstByName(String name);
	
}
