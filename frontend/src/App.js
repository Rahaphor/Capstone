import React from 'react';
import ListEmployee from "./component/ListEmployee";
import AddEmployee from "./component/AddEmployee";
import DeleteEmployee from "./component/DeleteEmpoyee";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import UpdateEmployee from './component/UpdateEmployee';


function App() {
  return (
    <div>

    <Router>
    <div className="container">
      <Switch>
        <Route path="/" exact component= {ListEmployee}></Route>
        <Route path="/employees"  component= {ListEmployee}></Route>
        <Route path="/addemployee" component={AddEmployee}></Route>
        <Route path="/updateemployee/:id" component={UpdateEmployee}></Route>
        <Route path="/deleteemployee/:id" component={DeleteEmployee}></Route>
      </Switch>
    </div>
    </Router>
    </div>

  );
}

export default App;
