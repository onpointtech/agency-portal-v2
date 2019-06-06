package com.opt.optimum.ui.benefits.claimant.so;

import java.time.LocalDate;

public class ClaimantProfileSO {
	long claimantId;
	String ssn;
	LocalDate dateOfBirth;	
	String firstName;
	String middleInitial;
	String lastName;
	String homePhone;
	String mobilePhone;
	String languagePreference;
	String educationLevel;
	String gender;
	String race;;
	String ethnicity;
	String ivrPin;
	String documentDeliveryPreference;
	
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
	@Override
	public String toString() {
		return "ClaimantProfileSO [claimantId=" + claimantId + ", ssn=" + ssn + ", dateOfBirth=" + dateOfBirth
				+ ", firstName=" + firstName + ", middleInitial=" + middleInitial + ", lastName=" + lastName
				+ ", homePhone=" + homePhone + ", mobilePhone=" + mobilePhone + ", languagePreference="
				+ languagePreference + ", educationLevel=" + educationLevel + ", gender=" + gender + ", race=" + race
				+ ", ethnicity=" + ethnicity + ", ivrPin=" + ivrPin + ", documentDeliveryPreference="
				+ documentDeliveryPreference + "]";
	}
}
