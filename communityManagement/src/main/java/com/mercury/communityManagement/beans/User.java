package com.mercury.communityManagement.beans;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "USER")
public class User implements UserDetails{
	@Id
	@SequenceGenerator(name = "user_seq_gen", sequenceName = "USER_SEQ", allocationSize = 1)
	@GeneratedValue(generator="user_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	
	//username is a word, no need to userName;
	@Column
	private String username;
	
	@Column
	private String password;

	@Column
	private Boolean isactive;
	
	//!!!
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	//Tell jpa we actually have another table
	@JoinTable(
		name = "USER_USER_PROFILE",
		joinColumns = {
			@JoinColumn(name = "USER_ID", referencedColumnName = "ID")
		},
		//指的是Profile
		inverseJoinColumns = {
			@JoinColumn(name = "USER_PROFILE_ID", referencedColumnName = "ID")
		}
	
	)
	private List<Profile> profiles;

    public User() {

    }

    public User(String username, String password, Boolean isactive, List<Profile> profiles) {
        this.username = username;
        this.password = password;
        this.isactive = isactive;
        this.profiles = profiles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getIsactive() {
        return isactive;
    }

    public void setIsactive(Boolean isactive) {
        this.isactive = isactive;
    }

    public List<Profile> getProfiles() {
        return profiles;
    }

    public void setProfiles(List<Profile> profiles) {
        this.profiles = profiles;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", isactive=" + isactive +
                ", profiles=" + profiles +
                '}';
    }

    @Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return profiles;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	//fail times lock
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	//password expired
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
	
}
