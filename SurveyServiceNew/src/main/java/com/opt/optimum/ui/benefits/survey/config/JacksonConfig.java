package com.opt.optimum.ui.benefits.survey.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@Configuration
public class JacksonConfig {

    @Bean
    @Primary
    public ObjectMapper objectMapper(Jackson2ObjectMapperBuilder builder) {
        ObjectMapper objectMapper = builder.createXmlMapper(false).build(); // builder.createXmlMapper(false).build();
        //the following 2 lines are enabled on the claim service, will attempt to check in without for
        //possible spring compatibility reasons.
        //objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        //objectMapper.registerModule(new JavaTimeModule());
        objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);   
        return objectMapper;
    }
}
