import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css'
import LoginForm from './components/LoginForm'

const App = ()=>{

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
        height="100vh"
        projectID="
        ffee1c0e-48fb-4479-a05c-462521f23238"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} /> } 
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App;