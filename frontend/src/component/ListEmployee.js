import { Component } from "react";
import Employeeservice from "../Server/Employeeservice";

class ListEmployee extends Component {
    constructor()
    {
        super()
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee= this.updateEmployee.bind(this);
        this.deleteEmployee= this.deleteEmployee.bind(this);
    }
    componentDidMount(){
        Employeeservice.getEmployees().then((res)=>{
            this.setState({employees:res.data});
        });
    }

    addEmployee()
    {
       
       this.props.history.push('/addemployee');
    }

    updateEmployee(id){
       
        this.props.history.push(`/updateemployee/${id}`);
     }

     deleteEmployee(id){
        this.props.history.push(`/deleteemployee/${id}`);
     }

    //  deleteEmployee(id){
    //     Employeeservice.deleteEmployee(id).then( res => {
    //         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    //     });

    //  }

    render(){
        return(
            <div>
                <h1 className="text-center"> EMPLOYEE LIST </h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Employee id</th>
                                <th>Employee name</th>
                                <th>Employee age</th>
                                <th>Employee address</th>
                                <th>Employee dept</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.dept}</td>

                                       <td> <button className="btn btn-success" id={employee.id} 
                                       onClick={() =>this.updateEmployee(employee.id)}> update </button></td> 
                                        <td><button className="btn btn-success" id={employee.id} 
                                        onClick={() =>this.deleteEmployee(employee.id)}> delete </button>
 </td>

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <button className="btn btn-success" onClick={this.addEmployee}> Add </button>

                
            </div>
        )
    }
}
export default ListEmployee;
