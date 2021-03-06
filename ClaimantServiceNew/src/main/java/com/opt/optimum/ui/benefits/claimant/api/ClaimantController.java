package com.opt.optimum.ui.benefits.claimant.api;

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

import com.opt.optimum.ui.benefits.claimant.business.ClaimantBusinessService;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;
import com.opt.optimum.ui.benefits.claimant.so.ClaimantProfileSO;
import com.opt.optimum.ui.benefits.claimant.so.UpdateClaimantProfileSO;

@RestController
@RequestMapping("/api/claimant")
public class ClaimantController {
	private static final Logger logger = LoggerFactory.getLogger(ClaimantController.class);
	
	private ClaimantBusinessService claimantBusinessService;
	
	@Autowired
	public ClaimantController(ClaimantBusinessService claimantBusinessService) {
		this.claimantBusinessService = claimantBusinessService;
	}
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/registerClaimant", method = RequestMethod.POST)
	public long registerClaimant(@RequestBody ClaimantProfileSO claimantProfileSO) {
		logger.info("Register Claimant Request Received ", claimantProfileSO.toString());
		return claimantBusinessService.registerClaimant(claimantProfileSO);
	}
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/getClaimantById/{claimantId}", method = RequestMethod.GET)
	public ClaimantProfile  getClaimantById(@PathVariable long claimantId) {
		ClaimantProfile claimantProfile = claimantBusinessService.getClaimantById(claimantId);
		return claimantProfile;
	}
	
//	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/getAllClaimants", method = RequestMethod.GET)
	public List<ClaimantProfile> getAllClaimants() {
		List<ClaimantProfile> claimantProfiles = claimantBusinessService.getAllClaimants();
		return claimantProfiles;
	}
	
//	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/updateClaimant/{claimantId}", method = RequestMethod.PUT)
	public ClaimantProfile updateClaimant(@RequestBody UpdateClaimantProfileSO claimantProfileSO, @PathVariable long claimantId) {
		return claimantBusinessService.updateClaimant(claimantProfileSO, claimantId);
	}
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/searchClaimant/{claimantInfo}", method = RequestMethod.GET)
	public List<ClaimantProfile> searchClaimant(@PathVariable String claimantInfo) {
		return claimantBusinessService.searchClaimant(claimantInfo);
	}
	
	@RequestMapping(value = "/getClaimantBySsn/{ssn}", method = RequestMethod.GET)
	public ClaimantProfile  getClaimantBySsn(@PathVariable String ssn) {
		ClaimantProfile claimantProfile = claimantBusinessService.getClaimantBySsn(ssn);
		return claimantProfile;
	}
}
