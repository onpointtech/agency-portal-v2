package com.opt.optimum.ui.benefits.claimant.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;



public interface ClaimantDomainService {

	long registerClaimant(ClaimantProfile claimantProfile);

	ClaimantProfile getClaimantById(long claimantId);

	List<ClaimantProfile> getAllClaimants();

	ClaimantProfile updateClaimant(ClaimantProfile claimantProfile, long claimantId);
}
