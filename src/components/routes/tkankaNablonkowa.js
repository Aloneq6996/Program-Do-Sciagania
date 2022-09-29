import { useNavigate } from "react-router-dom";
import "../css/component.css"
const Nablonkowa = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate(-1)}}>Go Back</button>
            <h4>Tkanka nabłonkowa</h4>
            <ul>Funckje tkanki nabłonkowej
            <li>Ochrona ciała przed urazami</li>
            <li>Wchłanianie wody i substancji odżywczych w układzie pokarmowym</li>
            <li>Wydzielanie, np. Potu i śluzu</li>
            <li>Odbieranie wrażeń zmysłowych np. smak i węch</li></ul>
            <h5>Budowa</h5>
            <ul>Ogólny opis:
            <li>Tkanka nabłonkowa ma zwarty układ komórek. Komórki te tworzą jedną lub wiele warstw ułożonych na błonie podstaawnej, czyli warstwie substancji międzykomórkowej</li></ul>
            <h5>Nabłonek jednowarstwowy płaski</h5>
            <ul>Budowa:
            <li>płaskie komórki tworzące cienką warstwe</li></ul>
            <ul>Funkcja:
            <li>umożliwia transport różnych substancji np. tlenu i dwutlenku węgla</li></ul>
            <ul>Występowanie:
            <li>pęcherzyki płucne oraz włosowate naczynia krwionośne</li></ul>
            <h5>Nabłonek jednowarstwowy sześcienny</h5>
            <ul>Budowa:
            <li>Komórki w kształcie sześcianów</li></ul>
            <ul>Funckja:
            <li>Wydziela wchłania substancje, wyściela przewody wyprowadzające różnych gruczołów</li></ul>
            <ul>Występowanie:
            <li>Przewody wyprowadzające gruczołów (np. ślinianek), kanaliki nerkowe</li></ul>
            <h5>Nabłonek jednowarstwowy walcowe</h5>
            <ul>Budowa:
            <li>Wysokie komórki w kształcie walca, które nie kiedy mają wypustki, tzw. mikrokosmki</li></ul>
            <ul>Funkcja:
            <li>Wchłania i wydziela substancje</li></ul>
            <ul>Występowanie:
            <li>Żołądek, jelito cienkie</li></ul>
            <h5>Nabłonek jednowarstwowy wielorzędowy</h5>
            <ul>Budowa:
            <li>Wysokie niskie komórki, których układ daje wrażenie wielowarstwowowści. Komórki mogą mieć rzęski</li></ul>
            <ul>Funckja:
            <li>Wyściela dużą część dróg oddechowych, rzęski usuwają zanieczyszczzenia</li></ul>
            <ul>Występowanie:
            <li>drogi oddechowe</li></ul>
            <h5>Nabłonek wielowarstwowy płaski</h5>
            <ul>Budowa:
            <li>Wiele warstw komórek, które są coraz cieńsze w miarę oddalania się od błony podstawnej</li></ul>
            <ul>Funckja:
            <li>Pełni głównie funckję ochronną</li></ul>
            <ul>Wystepowanie:
            <li>Powierzchnia ciała</li></ul>
            <ul>Tkanka nabłonkowa występuje w:
            <li>gruczołach dokrewnych</li>
            <li>wątrobie, żołądku</li>
            <li>gruczcołach łojowych i potowych</li>
            <li>gruczołach mlecznych</li>
            <li>itd...</li></ul>
        </>
    )
}

export default Nablonkowa;