package com.mercury.communityManagement.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "USER_DETAIL")
public class UserInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "user_detail_seq_gen")
	@SequenceGenerator(name = "user_detail_seq_gen", sequenceName = "USER_DETAIL_SEQ", allocationSize = 1)
	int id;
	@Column
	String firstname;
	@Column
	String middlename;
	@Column
	String lastname;
	@Column
	String email;
	@Column
	String phone;
	@Column
	String birthdate;
	@Column
	String ssn;
	@Column
	String address1;
	@Column
	String address2;
	@Column
	String state;
	@Column
	String city;
	@Column
	String zip;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	User user;

	public UserInfo() {
	}

	public UserInfo(String firstname, String middlename, String lastname, String email, String phone, String birthdate, String ssn, String address1, String address2, String state, String city, String zip, User user) {
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this.birthdate = birthdate;
		this.ssn = ssn;
		this.address1 = address1;
		this.address2 = address2;
		this.state = state;
		this.city = city;
		this.zip = zip;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
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

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserInfo{" +
				"id=" + id +
				", firstname='" + firstname + '\'' +
				", middlename='" + middlename + '\'' +
				", lastname='" + lastname + '\'' +
				", email='" + email + '\'' +
				", phone='" + phone + '\'' +
				", birthdate='" + birthdate + '\'' +
				", ssn='" + ssn + '\'' +
				", address1='" + address1 + '\'' +
				", address2='" + address2 + '\'' +
				", state='" + state + '\'' +
				", city='" + city + '\'' +
				", zip='" + zip + '\'' +
				", user=" + user +
				'}';
	}
}
