package com.opt.optimum.ui.benefits.claimant.domain;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantProfile;
import com.opt.optimum.ui.benefits.claimant.repo.AddressRepository;
import com.opt.optimum.ui.benefits.claimant.repo.ClaimantProfileRepository;
import com.opt.optimum.ui.benefits.claimant.so.ClaimantProfileSO;

@Service("ClaimantDomainServiceImpl")
public class ClaimantDomainServiceImpl implements ClaimantDomainService{

	private ClaimantProfileRepository claimantProfileRepository;
	private AddressRepository addressRepository;
	
	@Autowired
	public ClaimantDomainServiceImpl(ClaimantProfileRepository claimantProfileRepository, AddressRepository addressRepository) {
		this.claimantProfileRepository = claimantProfileRepository;
		this.addressRepository = addressRepository;
	}
	
	public long registerClaimant(ClaimantProfile claimantProfile) {
		claimantProfile.setLastInsertUpdateTS(OffsetDateTime.now());
		for(Address address : claimantProfile.address) {
			address.setLastInsertUpdateTS(OffsetDateTime.now());
		}
		ClaimantProfile newClaimantProfile = claimantProfileRepository.save(claimantProfile);
		
		return newClaimantProfile.getClaimantId();
	}

	@Override
	public ClaimantProfile getClaimantById(long claimantId) {
		return claimantProfileRepository.findById(claimantId).get();
	}
	
	public List<ClaimantProfile> getAllClaimants() {
		List<ClaimantProfile> claimantProfiles = new ArrayList<>();
		claimantProfileRepository.findAll().forEach(e -> claimantProfiles.add(e));
		return claimantProfiles;
	}

	public ClaimantProfile updateClaimant(ClaimantProfile updatedClaimantProfile, long claimantId) {
		ClaimantProfile oldClaimantProfile = getClaimantById(claimantId);
		if(updatedClaimantProfile.getDocumentDeliveryPreference() != null && updatedClaimantProfile.getDocumentDeliveryPreference() != "") {
			oldClaimantProfile.setDocumentDeliveryPreference(updatedClaimantProfile.getDocumentDeliveryPreference());
		}
		
		if(updatedClaimantProfile.getEducationLevel() != null && updatedClaimantProfile.getEducationLevel() != "") {
			oldClaimantProfile.setEducationLevel(updatedClaimantProfile.getEducationLevel());
		}
		
		if(updatedClaimantProfile.getEthnicity() != null && updatedClaimantProfile.getEthnicity() != "") {
			oldClaimantProfile.setEthnicity(updatedClaimantProfile.getEthnicity());
		}
		
		if(updatedClaimantProfile.getGender() != null && updatedClaimantProfile.getGender() != "") {
			oldClaimantProfile.setGender(updatedClaimantProfile.getGender());
		}
		
		if(updatedClaimantProfile.getHomePhone() != null && updatedClaimantProfile.getHomePhone() != "") {
			oldClaimantProfile.setHomePhone(updatedClaimantProfile.getHomePhone());
		}
		
		if(updatedClaimantProfile.getIvrPin() != null && updatedClaimantProfile.getIvrPin() != "") {
			oldClaimantProfile.setIvrPin(updatedClaimantProfile.getIvrPin());
		}
		
		if(updatedClaimantProfile.getLanguagePreference() != null && updatedClaimantProfile.getLanguagePreference() != "") {
			oldClaimantProfile.setLanguagePreference(updatedClaimantProfile.getLanguagePreference());
		}
		
		if(updatedClaimantProfile.getMiddleInitial() != null && updatedClaimantProfile.getMiddleInitial() != "") {
			oldClaimantProfile.setMiddleInitial(updatedClaimantProfile.getMiddleInitial());
		}
		
		if(updatedClaimantProfile.getMobilePhone() != null && updatedClaimantProfile.getMobilePhone() != "") {
			oldClaimantProfile.setMobilePhone(updatedClaimantProfile.getMobilePhone());
		}
		
		if(updatedClaimantProfile.getRace() != null && updatedClaimantProfile.getRace() != "") {
			oldClaimantProfile.setRace(updatedClaimantProfile.getRace());
		}
		
		if(updatedClaimantProfile.getLastInsertUpdateBy() != null && updatedClaimantProfile.getLastInsertUpdateBy() != "") {
			oldClaimantProfile.setLastInsertUpdateBy(updatedClaimantProfile.getLastInsertUpdateBy());
		}
		
		oldClaimantProfile.setLastInsertUpdateTS(OffsetDateTime.now());
		
		return claimantProfileRepository.save(oldClaimantProfile);
	}

	@Override
	public List<ClaimantProfile> searchClaimant(String claimantInfo) {
		List<ClaimantProfile> claimantProfiles = new ArrayList<>();
		claimantProfileRepository.searchClaimant(claimantInfo).forEach(e -> claimantProfiles.add(e));
		return claimantProfiles;
	}
}
