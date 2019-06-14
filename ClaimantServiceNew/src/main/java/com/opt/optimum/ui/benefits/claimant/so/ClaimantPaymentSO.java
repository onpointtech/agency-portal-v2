package com.opt.optimum.ui.benefits.claimant.so;

import com.opt.optimum.ui.benefits.claimant.enums.PaymentMethod;

public class ClaimantPaymentSO {

	PaymentMethod paymentMethod;
	long routingNumber;
	long accountNumber;
	String accountType;
	String bankName;
	
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
	
	@Override
	public String toString() {
		return "ClaimantPaymentSO [paymentMethod=" + paymentMethod + ", routingNumber=" + routingNumber
				+ ", accountNumber=" + accountNumber + ", accountType=" + accountType + ", bankName=" + bankName + "]";
	}
	
	
}
