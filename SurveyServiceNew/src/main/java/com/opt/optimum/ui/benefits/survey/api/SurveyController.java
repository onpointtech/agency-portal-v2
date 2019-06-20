package com.opt.optimum.ui.benefits.survey.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.opt.optimum.ui.benefits.survey.business.SurveyBusinessService;
import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.so.SurveySO;

@RestController
@RequestMapping("/api/survey")
public class SurveyController {
	private static final Logger logger = LoggerFactory.getLogger(SurveyController.class);
	
	private SurveyBusinessService surveyBusinessService;
	
	@Autowired
	public SurveyController(SurveyBusinessService surveyBusinessService) {
		this.surveyBusinessService = surveyBusinessService;
	}
	
	@RequestMapping(value = "/getSurveyById/{surveyId}", method = RequestMethod.GET)
	public Survey  getSurveyById(@PathVariable long surveyId) {
		Survey survey = surveyBusinessService.getSurveyById(surveyId);
		return survey;
	}
	
	@RequestMapping(value = "/createSurvey", method = RequestMethod.POST)
	public long registerSurvey(@RequestBody Survey survey) {
		logger.info("Create Survey Request Received ", survey.toString());
		return surveyBusinessService.createSurvey(survey);
	}
	
	@RequestMapping(value = "/updateSurvey/{surveyId}", method = RequestMethod.PUT)
	public Survey updateSurvey(@RequestBody SurveySO surveySO, @PathVariable long surveyId) {
		return surveyBusinessService.updateSurvey(surveySO, surveyId);
	}
}
