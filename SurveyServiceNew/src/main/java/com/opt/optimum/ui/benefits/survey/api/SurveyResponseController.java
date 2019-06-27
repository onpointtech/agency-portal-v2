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
import com.opt.optimum.ui.benefits.survey.entity.SurveyResponse;
import com.opt.optimum.ui.benefits.survey.so.SurveyResponseSO;

@RestController
@RequestMapping("/api/surveyResponse")
public class SurveyResponseController {
	private static final Logger logger = LoggerFactory.getLogger(SurveyController.class);
	
	private SurveyBusinessService surveyBusinessService;
	
	@Autowired
	public SurveyResponseController(SurveyBusinessService surveyBusinessService) {
		this.surveyBusinessService = surveyBusinessService;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/addResponse", method = RequestMethod.POST)
	public long  addResponse(@RequestBody SurveyResponseSO surveyResponseSO) {
		return surveyBusinessService.addResponse(surveyResponseSO);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deleteResponse/{responseId}", method = RequestMethod.DELETE)
	public String  deleteResponse(@PathVariable long responseId) {
		return surveyBusinessService.deleteResponse(responseId);
	}

}
