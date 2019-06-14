package com.opt.optimum.ui.benefits.claimant.repo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.CrudRepository;

import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;

public interface ClaimantProfileRepository extends CrudRepository<ClaimantProfile, Long> {
	
}
