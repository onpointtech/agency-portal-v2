package com.opt.optimum.ui.benefits.claimant.domain;

import java.util.List;

import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;
import com.opt.optimum.ui.benefits.claimant.so.ClaimantProfileSO;

public interface ClaimantDomainService {

	long registerClaimant(ClaimantProfile claimantProfile);

	ClaimantProfile getClaimantById(long claimantId);

	List<ClaimantProfile> getAllClaimants();

	ClaimantProfile updateClaimant(ClaimantProfile claimantProfile, long claimantId);

	List<ClaimantProfile> searchClaimant(String claimantInfo);

	ClaimantProfile getClaimantBySsn(String ssn);
}
