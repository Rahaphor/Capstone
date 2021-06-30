package com.example.jpa.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {

@Id

private int id;
private String name;
private int age;
private String address;
private String dept;

public Employee() {
	
}

public Employee(int id, String name, String address, int age, String dept) {
	super();
	this.id = id;
	this.name = name;
	this.age = age;
	this.address = address;
	this.dept = dept;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getDept() {
	return dept;
}

public void setDept(String dept) {
	this.dept = dept;
}




}
