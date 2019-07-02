package com.opt.optimum.ui.benefits.survey.entity;

import java.time.OffsetDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Survey implements Comparable<Survey>{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long surveyId;
	String name;
	@Size(min = 1, max = 9999)
	String surveyDefinition;
	OffsetDateTime lastInsertUpdateTS;
	String lastInsertUpdateBy;
	
	
	public long getSurveyId() {
		return surveyId;
	}
	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurveyDefinition() {
		return surveyDefinition;
	}
	public void setSurveyDefinition(String surveyDefinition) {
		this.surveyDefinition = surveyDefinition;
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
	@Override
	public int compareTo(Survey o) {
		return (int)this.surveyId - (int)o.surveyId;
	}
}
