package com.opt.optimum.ui.benefits.claimant.repo;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;

public interface ClaimantProfileRepository extends CrudRepository<ClaimantProfile, Long> {

	@Query("SELECT e FROM ClaimantProfile e JOIN e.address b WHERE e.firstName LIKE %?1% "
			+ "OR e.lastName LIKE %?1% "
			+ "OR e.ssn LIKE %?1% "
			+ "OR b.addressLine1 LIKE %?1% "
			+ "OR b.addressLine2 LIKE %?1% "
			+ "OR b.state LIKE %?1% "
			+ "OR b.city LIKE %?1% "
			+ "OR b.zipCode LIKE %?1% "
			+ "OR b.zipExt LIKE %?1%")
	public List<ClaimantProfile> searchClaimant(String claimantInfo);
}

//e.firstName LIKE %?1% OR e.lastName LIKE %?1% OR e.ssn LIKE %?1% OR
