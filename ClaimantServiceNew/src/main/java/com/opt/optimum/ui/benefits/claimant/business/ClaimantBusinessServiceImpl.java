package com.opt.optimum.ui.benefits.claimant.business;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.claimant.domain.ClaimantDomainService;

@Service
public class ClaimantBusinessServiceImpl implements ClaimantBusinessService{

	private ModelMapper modelMapper;
	
	private ClaimantDomainService claimantDomainService;
	
	private static final Logger logger = LoggerFactory.getLogger(ClaimantBusinessServiceImpl.class);
	
	@Autowired
	public ClaimantBusinessServiceImpl(ModelMapper modelMapper,
			ClaimantDomainService claimantDomainService) {
		this.modelMapper = modelMapper;
		this.claimantDomainService = claimantDomainService;
	}

}
