import logo from "./logo.svg";
import "./App.css";
import UserInfo from "./Component/UserInfo";
import Login from "./Component/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMemo, useEffect } from "react";
import cookies from "js-cookie";
import { useHistory } from "react-router";

function App() {
  // const history = useHistory();
  // useEffect(()=>{
  //   if(cookies.get('token')){
  //     history.push({
  //       pathname: '/listform'
  //     })
  //   }else{
  //     history.push({
  //       pathname : '/login'
  //     })
  //   }
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Login></Login>
              </Route>
            <Route path="/userlist">
              <UserInfo></UserInfo>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
