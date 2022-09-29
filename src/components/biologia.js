import { useNavigate } from "react-router-dom";
import "./css/component.css"
const LobbyBiol = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate("/")}}>Go Back</button>
            <br />
            <h3>Tematy:</h3>
            <ul>
                <li onClick={() => {navigate("/biologia/tkanki-zwierzece")}}>Tkanki zwierzęce</li>
            </ul>
        </>
    )
}
export default LobbyBiol;