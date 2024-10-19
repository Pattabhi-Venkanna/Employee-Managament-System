package com.ems.EMS_Bac.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.EMS_Bac.Model.Employee;
import com.ems.EMS_Bac.Service.EmployeeService;

@RestController
@RequestMapping("/api/Employees")
@CrossOrigin("http://localhost:5173")
public class EmployeeController {
	
	@Autowired
	private EmployeeService empService;
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		System.out.println(empService.getAllEmployees());
		return empService.getAllEmployees();
	}
	
	@GetMapping("/{id}")
	public Employee getEmployeById(@PathVariable Long id) {
		return empService.getEmployeeById(id);
	}
	
	@PostMapping
	public Employee createEmployee(@RequestBody Employee emp) {
		
		return empService.createEmployee(emp);
	}

	@DeleteMapping("/{id}")
	public void deleteEmployeeById(@PathVariable Long id) {
		empService.deleteEmployee(id);
	}
	
	@PutMapping("/{id}")
	public Employee updateEmployee( @PathVariable Long id, @RequestBody Employee emp ) {
		
		return empService.updateEmployee(id, emp);
	}
}
