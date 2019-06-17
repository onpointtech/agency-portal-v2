package com.opt.optimum.ui.benefits.claimant.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class ClaimantProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long claimantId;
	String ssn;
	LocalDate dateOfBirth;	
	@NotNull @Size(max=50)
	String firstName;
	@Size(max=1)
	String middleInitial;
	@NotNull @Size(max=50)
	String lastName;
	String homePhone;
	String mobilePhone;
	String languagePreference;
	String educationLevel;
	String gender;
	String race;
	String ethnicity;
	OffsetDateTime lastInsertUpdateTS;
	String lastInsertUpdateBy;
	String ivrPin;
	String documentDeliveryPreference;
	String email;
	String preferredOccupation;
	String alternateClaimantId;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "claimantId", nullable = false)
	public List<Address> address;
	
	public long getClaimantId() {
		return claimantId;
	}
	public void setClaimantId(long claimantId) {
		this.claimantId = claimantId;
	}
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleInitial() {
		return middleInitial;
	}
	public void setMiddleInitial(String middleInitial) {
		this.middleInitial = middleInitial;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getHomePhone() {
		return homePhone;
	}
	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}
	public String getMobilePhone() {
		return mobilePhone;
	}
	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}
	public String getLanguagePreference() {
		return languagePreference;
	}
	public void setLanguagePreference(String languagePreference) {
		this.languagePreference = languagePreference;
	}
	public String getEducationLevel() {
		return educationLevel;
	}
	public void setEducationLevel(String educationLevel) {
		this.educationLevel = educationLevel;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRace() {
		return race;
	}
	public void setRace(String race) {
		this.race = race;
	}
	public String getEthnicity() {
		return ethnicity;
	}
	public void setEthnicity(String ethnicity) {
		this.ethnicity = ethnicity;
	}
	public OffsetDateTime getLastInsertUpdateTS() {
		return lastInsertUpdateTS;
	}
	public void setLastInsertUpdateTS(OffsetDateTime lastInsertUpdateTS) {
		this.lastInsertUpdateTS = lastInsertUpdateTS;
	}
	public String getLastInsertUpdateBy() {
		return lastInsertUpdateBy;
	}
	public void setLastInsertUpdateBy(String lastInsertUpdateBy) {
		this.lastInsertUpdateBy = lastInsertUpdateBy;
	}
	public String getIvrPin() {
		return ivrPin;
	}
	public void setIvrPin(String ivrPin) {
		this.ivrPin = ivrPin;
	}
	public String getDocumentDeliveryPreference() {
		return documentDeliveryPreference;
	}
	public void setDocumentDeliveryPreference(String documentDeliveryPreference) {
		this.documentDeliveryPreference = documentDeliveryPreference;
	}
	public List<Address> getAddress() {
		return address;
	}
	public void setAddress(List<Address> address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPreferredOccupation() {
		return preferredOccupation;
	}
	public void setPreferredOccupation(String preferredOccupation) {
		this.preferredOccupation = preferredOccupation;
	}
	public String getAlternateClaimantId() {
		return alternateClaimantId;
	}
	public void setAlternateClaimantId(String alternateClaimantId) {
		this.alternateClaimantId = alternateClaimantId;
	}
}
