import user from "./components/Profile/user.json"
import './App.css';
import Profile from "./components/Profile/Profile"
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from "./components/Statistics/Statictics"


function App() {
  return <>
  {}
<Profile
name={user.name}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}/>
  {}
  {}
  <Statistics title="Upload stats" stats={statisticalData} />
  {}
  </>;
}

export default App;
