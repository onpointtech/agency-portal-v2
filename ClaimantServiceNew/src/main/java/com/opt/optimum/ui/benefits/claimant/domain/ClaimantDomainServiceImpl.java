package com.opt.optimum.ui.benefits.claimant.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.claimant.repo.ClaimantProfileRepository;

@Service("ClaimantDomainServiceImpl")
public class ClaimantDomainServiceImpl implements ClaimantDomainService{

	private ClaimantProfileRepository claimantProfileRepository;
	
	@Autowired
	public ClaimantDomainServiceImpl(ClaimantProfileRepository claimantProfileRepository) {
		this.claimantProfileRepository = claimantProfileRepository;
	}
	

}
