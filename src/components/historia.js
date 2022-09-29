import { useNavigate } from "react-router-dom";
import "./css/component.css"
const LobbyHis = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate("/")}}>Go Back</button>
            <br />
            <h3>Coming Soon</h3>
        </>
    )
}
export default LobbyHis;