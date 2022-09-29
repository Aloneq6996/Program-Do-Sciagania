import { useNavigate } from "react-router-dom";
import "../css/component.css"
const Laczna = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate(-1)}}>Go Back</button>
            
            <h4>Budowa i Funkcja tkanki łącznej</h4>
            <p>Tkanka łączna jest najbardziej zrożnicowana spośród wszystkich tkanek u człowieka.</p>
            <p>Główną funkcją tej tkanki polega na utrzymaniu łączności między innymi.</p>

            <ul>W tkance występują dwa składniki:
            <li>substancja podstawowa  odmienny skład w różnych typach tkanki łącznej</li>
            <li>białkowe elementy włóókniste  zanurzone w istocie podstawowej, spełniają różnorodne funkcje mechaniczne</li>
            </ul>

            <h5>Rodzaje tkanki:</h5>
            <ul>a) Tkanka łączna wiotka
            <li>płuca, trzustka, ślinianki, wątroba</li></ul>
            <ul>b) Tkanka łączna zbita
            <li>kości</li></ul>

            <h5>Tkanka łączna podporowa</h5>
            <p>Charakterystyczna dla zwierząt: chrzęstna i kostna</p>

            <ul>a) Tkanka łączna własciwa
            <li>tłuszcowa</li></ul>
            <ul>b) Tkanka łączna płynna
            <li>Krew</li>
            <li>limfa</li></ul>

            <ul>Tkanka tłusczowa funckja
            <li>magazynująca</li>
            <li>termoizolacyjną</li>
            <li>metaboliczna</li>
            <li>immunomodulująca</li></ul>

            <ul>Tkanka chrzęstna funckja
            <li>Chroni kości przed ścieraniem</li>
            <li>łączy kości</li>
            <li>występuje m.in. w przegrodze nosowej i stawach</li></ul>

            <ul>Tkanka chrzęstna szklista
            <li>Częściowo tworzy nasz szkielet</li></ul>

            <ul>Tkanka kostna
            <li>Tkanka kostna tworzy szkielet</li></ul>

            <ul>Funckje krwi:
            <li>transportowa</li>
            <li>termoregulalcyjna</li>
            <li>ochronna i obronna</li>
            <li>Homeostatyczna</li></ul>

            <ul>Tkanka tłusczowa:
            <li>a) żółta  magazynuje substancje zapasowe, termoizolacja</li>
            <li>b) brunatna  termoizolacja, termoregulacja (noworodki)</li></ul>

            <p>Tkanka chrzęstna + kostna = tkanka podporowa</p>

            <p>0,5 %  płytki krwi</p>
            <p>0,5 %  leukocyty</p>
            <p>45 %  erytrocyty</p>
            <p>4 %  substancje rozpuszone w osoczu</p>
            <p>50 %  woda</p>

        </>
    )
}

export default Laczna;