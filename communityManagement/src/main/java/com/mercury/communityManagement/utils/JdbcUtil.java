package com.mercury.communityManagement.utils;

import org.springframework.beans.factory.annotation.Value;

import java.sql.Connection;
import java.sql.DriverManager;

public class JdbcUtil {

	// for connecting to DB by using JDBC
	// need below 4 informations:

	private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
//	spring.datasource.driver-class-oracle.jdbc.driver.OracleDriver


//	@Value("${spring.datasource.url}")

	private static final String URL = "jdbc:mysql://mercuryproject.cnoyvlyyjhhu.us-east-2.rds.amazonaws.com:3306/mercuryProject?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=America/New_York";
//	private static final String URL = "jdbc:mysql://127.0.0.1:3306/mercuryProject?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=America/New_York";


	//	@Value("${spring.datasource.username}")
//	private static final String USERNAME = "root";
	private static final String USERNAME = "admin";

//	@Value("${spring.datasource.password}")
//	private static final String PASSWORD = "Mercury2020!";
	private static final String PASSWORD = "mercury0420";

	public static Connection getConnection(){
		Connection conn = null;
		try{
			// Class.forName() will load the class into Perm Gen during runtime
			// since PG won't load all the class, we manually ask it to load
			Class.forName(DRIVER);
			conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
		}catch(Exception e){
			System.err.println(e);
		}
		return conn;
	}

}