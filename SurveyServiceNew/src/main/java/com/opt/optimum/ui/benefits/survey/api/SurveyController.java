package com.opt.optimum.ui.benefits.survey.api;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.opt.optimum.ui.benefits.survey.business.SurveyBusinessService;
import com.opt.optimum.ui.benefits.survey.entity.Survey;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;
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
	
//	@CrossOrigin(origins = "http://localhost:8083")
	@RequestMapping(value = "/getSurveyById/{surveyId}", method = RequestMethod.GET)
	public Survey  getSurveyById(@PathVariable long surveyId) {
		Survey survey = surveyBusinessService.getSurveyById(surveyId);
		return survey;
	}
	
//	@CrossOrigin(origins = "http://localhost:8083")
	@RequestMapping(value = "/addUpdateSurvey", method = RequestMethod.POST)
	public long addUpdateSurvey(@RequestBody Survey survey) {
		logger.info("Create Survey Request Received ", survey.toString());
		return surveyBusinessService.addUpdateSurvey(survey);
	}
	
//	@CrossOrigin(origins = "http://localhost:8083")
	@RequestMapping(value = "/getAllSurveys", method = RequestMethod.GET)
	public List<Survey> getAllSurveys() {
		List<Survey> allSurveys = surveyBusinessService.getAllSurveys();
		return allSurveys;
	}
	
	@RequestMapping(value="/submitClaim", method = RequestMethod.POST)
	public String submitClaim() {
		return surveyBusinessService.submitClaim();
	}
	
//	@CrossOrigin(origins = "http://localhost:8083")
	@RequestMapping(value = "/getSurvey/{surveyName}/{claimantId}", method = RequestMethod.GET)
	public SurveyResponseSO  getSurvey(@PathVariable String surveyName,@PathVariable long claimantId) {
		SurveyResponseSO surveyResponseSO = surveyBusinessService.getSurvey(surveyName,claimantId);
		
		return surveyResponseSO;
	}
	
	
}
