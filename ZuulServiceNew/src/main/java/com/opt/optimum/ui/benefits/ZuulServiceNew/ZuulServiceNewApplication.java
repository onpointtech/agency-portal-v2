package com.opt.optimum.ui.benefits.ZuulServiceNew;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@EnableZuulProxy
@RestController
@SpringBootApplication
public class ZuulServiceNewApplication {

	  @RequestMapping(value = "/available")
	  public String available() {
	    return "<h1>PAGE: Available</h1>";
	  }

	  @RequestMapping(value = "/checked-out")
	  public String checkedOut() {
	    return "PAGE: Checked Out";
	  }
	
	public static void main(String[] args) {
		SpringApplication.run(ZuulServiceNewApplication.class, args);
	}

}
