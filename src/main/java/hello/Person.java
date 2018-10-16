package hello;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Person {

	@Id private String id;

	private String email;
	private String name;
	private String role;
	private String password;
//	private CV cvs;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
//	public CV getCvs() {
//		return cvs;
//	}
//	public void setCvs(CV cvs) {
//		this.cvs = cvs;
//	}

	
}
