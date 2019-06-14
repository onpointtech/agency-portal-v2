package com.opt.optimum.ui.benefits.claimant.business;

import java.time.OffsetDateTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.claimant.domain.ClaimantDomainService;
import com.opt.optimum.ui.benefits.claimant.domain.ClaimantDomainServiceImpl;
import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;
import com.opt.optimum.ui.benefits.claimant.so.ClaimantProfileSO;
import com.opt.optimum.ui.benefits.claimant.so.UpdateClaimantProfileSO;

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

	public long registerClaimant(ClaimantProfileSO claimantProfileSO) {
		ModelMapper modelMapper = new ModelMapper();
		ClaimantProfile claimantProfile = modelMapper.map(claimantProfileSO, ClaimantProfile.class);
		return claimantDomainService.registerClaimant(claimantProfile);
	}
	
	public ClaimantProfile getClaimantById(long claimantId) {
		return claimantDomainService.getClaimantById(claimantId);
	}
	
	public List<ClaimantProfile> getAllClaimants() {
		return claimantDomainService.getAllClaimants();
	}

	public ClaimantProfile updateClaimant(UpdateClaimantProfileSO updateClaimantProfileSO, long claimantId) {
		ModelMapper modelMapper = new ModelMapper();
		ClaimantProfile claimantProfile = modelMapper.map(updateClaimantProfileSO, ClaimantProfile.class);
		return claimantDomainService.updateClaimant(claimantProfile, claimantId);
	}

	public List<ClaimantProfile> searchClaimant(String claimantInfo) {
		return claimantDomainService.searchClaimant(claimantInfo);
	}
}
