import './styles.css';

export default function FilterCard() {

    return (
        <div className="card">
            <form className="dblock">
                <div>
                    <input className="card-input" type="text" placeholder="Preço mínimo" />
                </div>
                <div>
                    <input className="card-input" type="text" placeholder="Preço máximo" />
                </div>
                <button className="button" type="submit">Filtrar</button>
            </form>
        </div>
    );

}