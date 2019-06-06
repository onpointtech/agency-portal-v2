package com.opt.optimum.ui.benefits.claimant.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.opt.optimum.ui.benefits.claimant.business.ClaimantBusinessService;

@RestController
@RequestMapping("/api/claimant")
public class ClaimantController {
	private static final Logger logger = LoggerFactory.getLogger(ClaimantController.class);
	
	private ClaimantBusinessService claimantBusinessService;
	
	@Autowired
	public ClaimantController(ClaimantBusinessService claimantBusinessService) {
		this.claimantBusinessService = claimantBusinessService;
	}
	
	
	
}
