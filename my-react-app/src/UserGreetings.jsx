
function UserGreetings(props){
    if(props.isLoggedin){
        return(
            <h1 className="welcome-message">Welcome {props.name}</h1>
        );
    }
    else{
        return(
            <h1 className="login-message">Please Log in</h1>
        );
    }

}

export default UserGreetings;