package com.ems.EMS_Bac.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.EMS_Bac.Model.Employee;
import com.ems.EMS_Bac.Repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	public List<Employee> getAllEmployees(){
		return empRepo.findAll();
	}
	
	public Employee getEmployeeById(Long Id) {
		
		return empRepo.findById(Id).orElse(null);
	}
	
	public Employee createEmployee(Employee employee) {
		return empRepo.save(employee);
	}
	
	public void deleteEmployee(Long Id) {
		empRepo.deleteById(Id);
		
	}
	
	public Employee updateEmployee(Long id, Employee empDetails) {
		Employee emp=empRepo.findById(id).orElse(null);
		if(emp!=null) {
			emp.setFirstName(empDetails.getFirstName());
			emp.setLastName(empDetails.getLastName());
			emp.setEmailId(empDetails.getEmailId());
			
			return empRepo.save(emp);

		}
		return null;
	}
	

}
