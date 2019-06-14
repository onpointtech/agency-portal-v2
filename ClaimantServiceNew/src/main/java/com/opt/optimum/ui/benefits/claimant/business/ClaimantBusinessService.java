package com.opt.optimum.ui.benefits.claimant.business;

import java.util.List;

import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;
import com.opt.optimum.ui.benefits.claimant.so.ClaimantProfileSO;
import com.opt.optimum.ui.benefits.claimant.so.UpdateClaimantProfileSO;

public interface ClaimantBusinessService {

	long registerClaimant(ClaimantProfileSO claimantProfileSO);

	ClaimantProfile getClaimantById(long claimantId);

	List<ClaimantProfile> getAllClaimants();

	ClaimantProfile updateClaimant(UpdateClaimantProfileSO updateClaimantProfileSO, long claimantId);	
}
