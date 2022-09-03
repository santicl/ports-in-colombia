import { useState, useEffect } from "react";

const PUBLIC_API = 'https://www.datos.gov.co/resource/5r3g-zv5z.json';

function InfoContent() {
    const [datas, setData] = useState([]);


    useEffect(() => {
        getData();
    });


    function getData() {
        fetch(PUBLIC_API)
            .then(response => response.json())
            .then(response => setData(response));
    }

    return (
        <div className="Container">
            {
                datas.map((data, index) => {
                    const { sociedad_portuaria, zona_portuaria, tipo_carga, exportacion } = data;
                    return (
                        <div className="Container-info" key={index}>
                            <h2>Sociedad Portuaria: {sociedad_portuaria}</h2>
                            <div className="Info">
                                <h3><strong>Zona del puerto:</strong> {zona_portuaria}</h3>
                                <h3><strong>Tipo de carga:</strong> {tipo_carga}</h3>
                                <h3><strong>Exportacion:</strong> {exportacion}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InfoContent;
