package com.opt.optimum.ui.benefits.claimant.entity;

import java.time.OffsetDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address {
	@Id
	@GeneratedValue
	private long id;
	
	String addressLine1;
	String addressLine2;
	String state;
	String city;
	String zipCode;
	String zipExt;
	OffsetDateTime lastInsertUpdateTS;
	String lastInsertUpdateBy;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getZipExt() {
		return zipExt;
	}

	public void setZipExt(String zipExt) {
		this.zipExt = zipExt;
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
}