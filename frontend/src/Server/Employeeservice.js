import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8081/Api/allemployees";
const EMPLOYEE_API_BASE_URL = "http://localhost:8081/Api"

class Employeeservice{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/allemployees");
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/employee/"+id);
    }

    addingEmployee(worker){
        return axios.post(EMPLOYEE_API_BASE_URL+"/addemployee", worker);
    }

    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/employee/"+id,employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/employee/"+id)
    }
}
export default new Employeeservice();