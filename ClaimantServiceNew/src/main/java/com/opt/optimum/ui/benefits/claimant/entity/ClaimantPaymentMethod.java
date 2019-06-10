package com.opt.optimum.ui.benefits.claimant.entity;

import java.time.OffsetDateTime;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.opt.optimum.ui.benefits.claimant.enums.PaymentMethod;


public class ClaimantPaymentMethod {
	
	@Id
	@GeneratedValue
	private long id;
	

	PaymentMethod paymentMethod;
	long routingNumber;
	long accountNumber;
	String accountType;
	String bankName;
	OffsetDateTime lastInsertUpdateTS;
	String lastInsertUpdateBy;
	
	public long getClaimantId() {
		return id;
	}
	public void setClaimantId(long claimantId) {
		this.id = claimantId;
	}
	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public long getRoutingNumber() {
		return routingNumber;
	}
	public void setRoutingNumber(long routingNumber) {
		this.routingNumber = routingNumber;
	}
	public long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
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
