import { useNavigate } from "react-router-dom";
import "../css/component.css"
const Nerwowa = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate(-1)}}>Go Back</button>
            <h4>Tkanka nerwowa</h4>
	        <h5>Czym jest tkanka nerwowa?</h5>
            <p>Tkanka nerwowa odpowiada za aodbieranie i przesyłanie impulsów ze środowiska ( zarówno zewnętrznego jak i wewnętrznego ), inaczej mówiąc odpowiada za wrażliwość organizmu</p>
            <h5>Co to są neurony?</h5>
            <p>Neuron jest komórką nerwową, której zewnętrzna część otoczona jest błoną komórkową. Ma ona stanowić barierę dla szkodliwych substancji. Błona ta umożliwia transport takich substancji jak tlen, dwutlenek węgla i woda. Wewnątrz neuronu znajduje się cytoplazma, jądro z chromosomami, aparat Golgiego i mitochondrium</p>
            <h5>Jaką funkcje pełnią neurony</h5>
            <p>Zadaniem Neuronów jest przewodzenie impulsów elektrycznych. Dendryty przekazują impulsy do ciała k.</p>
            <h5>Przewodzenie impulsów nerwowych w synapsach</h5>
            <p>Synapsa składa się z błony presynaptycznej, która jest zakończeniem aksonu, szczeliny synaptycznej oraz błony postsynaptycznej. Błoną postsynapcztyczną może być błona dendrytu, ciała komórki nerwowej lub aksonu. W rozszerzonych zakończeniach askonów nazywanych kolbkami synaptycznymi zgrupowane są wydzielnicze pęcherzyki synaptyczne, które zawierają związi chemiczne o charaktarze neuroprzekaźnika (np. dopamina, acetylocholina). Pod wpływem impulsu nerwowego docierającego do zakończenia aksonu zawartość pęcherzyków uwalniana </p>
            <h5>Komórki glejowe</h5>
            <ul>Rola komórek glejowych:
            <li>Pełnią funkcje podporową dla komórek nerwowych.</li>
            <li>Wytwarzają osłonki mielinowe wokół aksonów komórek nerwowych.</li>
            <li>Wpływają na szybkość przewodzenia impulsów nerwowych.</li>
            <li>Dostarczają nreuronom substancji odżywczych.</li>
            <li>Chronią neurony przed uszkodzeniem mechanicznym</li>
            <li>Izolują komórki  nerowe od sąsiednich tkanek i narządów</li>
            <li>Biorą udział w procesach odpornościowych w obrębie układu nerwowego</li></ul>
            <h5>Budowa</h5>
            <p>Tkanka nerwowa u człowieka rozwija się początkowo z pierwotnej ektodermy zlokalizowanej powyżej struny grzbietowej. Struna indukuje rozwój płyki nerwowej za pomocą indukcji embrionalnej. Płytka stopniowo zawija się tworząc rynienkę nerwową, a w 21 dniu rozwoju - cewkę nerwową</p>

        </>
    )
}

export default Nerwowa;