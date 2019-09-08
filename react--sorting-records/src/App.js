import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {

  state = {
    people: [
      {
        name: "Veronica Mize",
        dob: "11/29/2011"
      }, {
        name: "Cecilia Olsson",
        dob: "09/16/1992"
      }, {
        name: "Peter Parker",
        dob: "01/16/1992"
      }, {
        name: "Jimmy Shergil",
        dob: "12/12/2001"
      }, {
        name: "Alexander Alfred",
        dob: "02/09/1891"
      }, {
        name: "Janice Shroyer",
        dob: "12/01/1982"
      }, {
        name: "Ralph White",
        dob: "11/30/2011"
      }, {
        name: "Deborah T. Decker",
        dob: "10/31/1999"
      }
    ],
    filterValue: 'name'
  }

  dofilterClick(v) {
    console.log('which value', v);

    this.setState({ filterValue: v });

  }


  render() {
    console.log('states', this.state);

    let enhanced = this.state.people.map(
      (row)=>{
        let realdob = new Date(row.dob)
        return {...row,  realdob  }
      }
    )

    let sorted = enhanced.slice().sort(
      (a, b) => {
        if (this.state.filterValue === 'name') {
          return ('' + a[this.state.filterValue]).localeCompare('' + b[this.state.filterValue])
        } else {
          return (a.realdob- b.realdob);
        }

      }
      // (a, b)=> {return a[this.state.filterValue][0]-b[this.state.filterValue][0]}
    )

    console.log('sorted', sorted);


    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter onfilterClick={(v) => this.dofilterClick(v)}></Filter>
        <RecordTable people={sorted}></RecordTable>
      </div>
    );
  }
}

export default App;
