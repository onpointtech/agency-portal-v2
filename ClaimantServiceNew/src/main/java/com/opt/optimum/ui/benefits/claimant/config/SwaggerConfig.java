package com.opt.optimum.ui.benefits.claimant.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.context.annotation.Primary;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@Primary
public class SwaggerConfig {
	private static final String SWAGGER_API_KEY="Authorization";
	 @Bean
	    public Docket api(){
	        return new Docket(DocumentationType.SWAGGER_2)
	            .select()
	            .apis(RequestHandlerSelectors.any())
	            .paths(PathSelectors.regex("/api/.*"))
	            .build()
	            .apiInfo(apiInfo())
	            .securitySchemes(Arrays.asList(apiKey()))
	            .securityContexts(Arrays.asList(securityContext()));
	    }

	    private ApiInfo apiInfo() {
	        return new ApiInfoBuilder()
	            .title("Optimum Claimant Service")
	            .description("Optimum Claimant Service")
	            .version("VERSION")
	            .termsOfServiceUrl("http://terms-of-services.url")
	            .license("LICENSE")
	            .licenseUrl("http://url-to-license.com")
	            .build();
	    }
	    private ApiKey apiKey() {
	    	return new ApiKey(SWAGGER_API_KEY, "Authorization", "header");
	    }
	    @Bean
		public springfox.documentation.swagger.web.SecurityConfiguration security() {
			return new SecurityConfiguration(null, null, null, null, "Authorization", ApiKeyVehicle.HEADER,
					"Authorization", ",");
		}
	    private SecurityContext securityContext() {
	        return SecurityContext.builder()
	            .securityReferences(defaultAuth())
	            .forPaths(PathSelectors.regex("/api/*"))
	            .build();
	      }
	    List<SecurityReference> defaultAuth() {
	        AuthorizationScope authorizationScope
	            = new AuthorizationScope("global", "accessEverything"); 
	        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
	        authorizationScopes[0] = authorizationScope;
	        return Arrays.asList(
	            new SecurityReference(SWAGGER_API_KEY, authorizationScopes));
	      }
}
