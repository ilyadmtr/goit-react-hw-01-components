import './App.css';
import user from "./components/Profile/user.json"
import statisticalData from './components/Statistics/statistical-data.json';
import friends from "./components/FriendList/friends.json"
import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistics/Statictics"
import FriendList from "./components/FriendList/FriendList"



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
  {}
  <FriendList friends = {friends}/>

  {}
  </>;
}

export default App;
