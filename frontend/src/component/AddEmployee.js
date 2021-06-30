import React, {Component} from 'react'
import Employeeservice from '../Server/Employeeservice'

class AddEmployee extends Component{
    constructor(props){
        super()
        this.state={
            id: '',
            name:'',
            address:'',
            age:'',
            dept:''

        }
        this.idhandler = this.idhandler.bind(this);
        this.namehandler = this.namehandler.bind(this);
        this.addresshandler = this.addresshandler.bind(this);
        this.agehandler = this.agehandler.bind(this);
        this.depthandler = this.depthandler.bind(this);
        this.cancelled= this.cancelled.bind(this);


    }
    idhandler=(event) =>{
        this.setState({
            id: event.target.value
        });
    }
    namehandler=(event) =>{
        this.setState({
            name: event.target.value
        });
    }

    addresshandler=(event) =>{
        this.setState({
            address: event.target.value
        });
    }

    agehandler=(event) =>{
        this.setState({
            age: event.target.value
        });
    }

    depthandler=(event) =>{
        this.setState({
            dept: event.target.value
        });
    }

    saveEmployee =(e)=>{
        e.preventDefault();
        let employee={
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            dept: this.state.dept
        };
        console.log(employee);
        Employeeservice.addingEmployee(employee).then(res=>{
            this.props.history.push('/employees')
        }).catch(err=>{
            console.loh('record not found');
        });
    }

    cancelled(e){
        e.preventDefault();
        this.props.history.push('/employees');
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Employee Id</label>
                                        <input placeholder="Id" name="id" className="form-control"
                                        value={this.state.id} onChange={this.idhandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee name</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.namehandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee address</label>
                                        <input placeholder="Address" name="address" className="form-control"
                                        value={this.state.address} onChange={this.addresshandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Age</label>
                                        <input placeholder="Age" name="age" className="form-control"
                                        value={this.state.age} onChange={this.agehandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee dept</label>
                                        <input placeholder="Dept" name="dept" className="form-control"
                                        value={this.state.dept} onChange={this.depthandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-success" onClick={this.cancelled}>cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddEmployee;
