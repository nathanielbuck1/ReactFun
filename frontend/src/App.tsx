import React from 'react';
import logo from './logo.svg';
import './App.css';

const Teams = [
  {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
  {"tid": 105, "cid": 0, "did": 0, "school": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839},
  {"tid": 109, "cid": 0, "did": 0, "school": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298},
]

function Welcome(){
  return (<h1>MARCH MADNESSSSSSSSSS</h1>)
}

class March extends React.Component<{name:string; city:string; school:string; state:string;}>
{
  render(){
    const OneMarch = this.props;

    return(
      <div>
        <h2>SChool Name: {OneMarch.school}</h2>
        <h3>Mascot Name:{OneMarch.name}</h3>
        <h3>Location fo school: {OneMarch.state}, {OneMarch.city}</h3>
      </div>
    );


  }
}

function TeamsList(){
  return(
    <div>
      {Teams.map(OneMarch => <March {...OneMarch}/>)}
    </div>
  )
}

function App(){
  return(
    <div>
      <Welcome/>
      <TeamsList/>
    </div>
  )
}


export default App;