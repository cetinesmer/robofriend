import React, {Component}  from 'react';
import  CardList from '../components/CardList' ;
import SearchBox from '../components/SearchBox' ;
import Scroll from '../components/Scroll';
import './App.css';
//import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      //robots: robots, **json kullancagimiz icin bunu kapattik
      robots:[],
      searchfield: ''
    }
  }
  // robotlarin listesini artik JSON ile  disaridfan aliyoruz..robots.js dosyasi/array'i kullanilmiyor
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
       .then(response =>  response.json())
        // .then(json => console.log(json))
       .then(users => this.setState({ robots: users })); //updating the users with setState.
       // .then(users => [] ) ; //boyle yazsaydik robotlarin listesi gelmeyecekti..
  }

  //Yukarida 2 state'imiz var;robots ve searchfield

  onSearchChange = (event) => {
    this.setState({ searchfield:event.target.value})     
   }

  render() {
     const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
          return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                   <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }
    }
export default App;

/*
Deftere bu kismin aciklamasini yazdim,oradan oku..
State kullanacagimiz icin tekrar class yapisina donuyoruz..
Yukaridan takip et...
const state = {
  robots: robots,
  searcfield:'',
}

const App = () => {
  return (
    <div className='tc'>
     <h1>RoboFriends</h1>
     <SearchBox/>  
     <CardList robots = {robots}/>
    </div>
);
}

*/


// SearchList must communicate with CardList,so CardList can be filtered..
//In order to do that React has a solution like STATE....
//React just read Props and rendes..One way data flow..
//recieve something and return something...
//CardList.js'teki CardList fonksiyondarobot argumanini alip key,id,bane,email vb dondurmesi props kullanimidir,one way data flow..
//props never change,we do not modify them
// Ancak Searchbox'a birsey yazip filtreleme yapmasini istedigimiz icin yani komsu componentlarin haberlesmesini istedigimiz icin
//STATE kullanacagiz...
//STATE is simply description of your app
// simply an object describes your application

/* ilk uygulama: class yerine function ile devam ediyoruz..
  render() {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacttttt</h1>
        </header>
        <p className="App-intro">
          To get started Cetin bro, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/