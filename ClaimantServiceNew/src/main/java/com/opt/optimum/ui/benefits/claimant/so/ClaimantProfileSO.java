package com.opt.optimum.ui.benefits.claimant.so;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.opt.optimum.ui.benefits.claimant.entity.Address;
import com.opt.optimum.ui.benefits.claimant.entity.ClaimantPaymentMethod;

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
	String lastInsertUpdateBy;
	ClaimantPaymentMethod claimantPaymentMethod;
	
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
	public String getLastInsertUpdateBy() {
		return lastInsertUpdateBy;
	}
	public void setLastInsertUpdateBy(String lastInsertUpdateBy) {
		this.lastInsertUpdateBy = lastInsertUpdateBy;
	}
	public List<Address> getAddress() {
		return address;
	}
	public void setAddress(List<Address> address) {
		this.address = address;
	}
	public ClaimantPaymentMethod getClaimantPaymentMethod() {
		return claimantPaymentMethod;
	}
	public void setClaimantPaymentMethod(ClaimantPaymentMethod claimantPaymentMethod) {
		this.claimantPaymentMethod = claimantPaymentMethod;
	}
	@Override
	public String toString() {
		return "ClaimantProfileSO [claimantId=" + claimantId + ", ssn=" + ssn + ", dateOfBirth=" + dateOfBirth
				+ ", firstName=" + firstName + ", middleInitial=" + middleInitial + ", lastName=" + lastName
				+ ", homePhone=" + homePhone + ", mobilePhone=" + mobilePhone + ", languagePreference="
				+ languagePreference + ", educationLevel=" + educationLevel + ", gender=" + gender + ", race=" + race
				+ ", ethnicity=" + ethnicity + ", ivrPin=" + ivrPin + ", documentDeliveryPreference="
				+ documentDeliveryPreference + ", lastInsertUpdateBy=" + lastInsertUpdateBy + ", claimantPaymentMethod="
				+ claimantPaymentMethod + ", address=" + address + "]";
	}
	
}
