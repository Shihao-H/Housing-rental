package com.mercury.communityManagement.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	//before you execute any getall, do the logger.info first.
	//first * means return value
	@Before("execution (* com.mercury.SpringBootRestDemo.controllers.*.getAll(..))")
	public void logFoo() {
		logger.info("foo....");
	}
	
//	@Pointcut
}
