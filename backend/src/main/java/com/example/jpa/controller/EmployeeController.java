package com.example.jpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.jpa.exception.ResourceNotFoundException;
import com.example.jpa.model.Employee;
import com.example.jpa.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/Api/")
public class EmployeeController {
@Autowired
private EmployeeRepository empRepo;
	
@GetMapping("/allemployees")
public List<Employee> getAllemployee(){
	return empRepo.findAll();
}

@PostMapping("/addemployee")
public Employee newStudentModel(@RequestBody Employee s)
{
	return empRepo.save(s);
}

@GetMapping("/employee/{id}")

public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
	Employee s = empRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("student not found"));
	return ResponseEntity.ok(s);
}

@GetMapping("/Employeees/{name}")
public List<Employee> getStudentModelByName(@PathVariable String name){
	
//	return empRepo,finByName(name);
	List <Employee> students=empRepo.findByName(name);
	if(students.isEmpty()) {
		System.out.println(new ResourceNotFoundException("Student (s) with the name"+name+"not found"));
	}
	return empRepo.findByName(name);
	
}

@PutMapping ("/employee/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee worker){
	Employee s= empRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
	s.setName(worker.getName());
	s.setAge(worker.getAge());
	s.setAddress(worker.getAddress());
	s.setDept(worker.getDept());
	Employee updatedEmployee=empRepo.save(s);
	return ResponseEntity.ok(updatedEmployee);
}

@DeleteMapping("/employee/{id}")
public String deleteEmployee(@PathVariable int id) {
	empRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Student not found"));
	empRepo.deleteById(id);
	return "The employee with id: "+ id + " is removed from the database.";
}


}
