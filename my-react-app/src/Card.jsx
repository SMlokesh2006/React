import UserGreetings from "./UserGreetings.jsx";
import Button from "./button.jsx";
import List from "./List.jsx";
function Card(props){
    return(
        <>
            <div className="card">
                <h2>{props.title}</h2>
                <UserGreetings isLoggedin={false} name="Lokesh"/>
                <List/>
                <Button/>
            </div>
        </>
    );
}

export default Card;