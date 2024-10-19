package com.ems.EMS_Bac.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ems.EMS_Bac.Model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
