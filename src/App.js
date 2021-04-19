import './App.css';
// import Greet from './components/Greet'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import FunctionClick from'./components/FunctionClick'
// import ParentComponent from'./components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
import Inline from './components/Inline'
// import Stylesheets from './components/Stylesheets'
import './appStyles.css'
import styles from './appStyles.module.css'
import './appStyles.css'

function App() {
    return ( <
        div className = "App" >
        <
        h1 className = "error" > Error < /h1> <
        h1 className = { styles.success } > Success < /h1> { /* <Stylesheets primary={true}/> */ } <
        Inline / > { /* <UserGreeting /> */ } { /* <ParentComponent/> */ } { /* <EventBind/> */ } { /* <Message/> */ } { /* <Counter/> */ } { /* <Welcomeaaaa/> */ } { /* <FunctionClick/> */ } { /* <ClassClick/> */ } { /* <Greet name="Bruce" heroName="Batman"/> */ } {
            /* <p>This is children props</p></Greet>
                  <Greet name="Clark" heroName="Superman"></Greet>
                  <Greet name="Diana" heroName="Wonder Woman"/>  */
        } <
        /div>
    );
}

export default App;