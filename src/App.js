import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Profile from "./components/Profile";
import Blog from "./components/Blog";

function App() {
    const [state, setState] = useState('');
    let component 
    if(state==='about' ){
      component=<About></About>
    }
    if(state==='profile'){
      component=<Profile></Profile>
    }
    if(state==='blog'){
      component=<Blog></Blog>
    }
   

    return (
        <div className="App">
            <button onClick={() => setState('about')}>About</button>
            <button onClick={() => setState('profile')}>Profile</button>
            <button onClick={() => setState('blog')}>Blog</button>
            {component}
        </div>
    );
}

export default App;
