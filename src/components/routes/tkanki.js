import { useNavigate } from "react-router-dom";

const Tkanki = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className="btn" onClick={() => {navigate(-1)}}>Go Back</button>

            <ul>
                <li onClick={() => {navigate("/biologia/tkanki-zwierzece/laczna")}}>Tkanka Łączna</li>
                <li onClick={() => {navigate("/biologia/tkanki-zwierzece/nerwowa")}}>Tkanka Nerwowa</li>
                <li onClick={() => {navigate("/biologia/tkanki-zwierzece/nablonkowa")}}>Tkanka Nabłonkowa</li>
            </ul>
        </>
    )
}

export default Tkanki;