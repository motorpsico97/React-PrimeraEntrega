import '../styles/ItemListContainer.css';
import React, { useState, useEffect } from 'react';

export const ItemListContainer = () => {
    const textos = ["vestimenta", "calzados", "accesorios", "y mucho más"];
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % textos.length);
        }, 4000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='itemListContainer'>
            <h1>Bienvenidos a Shoes Store</h1>
            <h2>Encuentra los mejores productos para <span className='textH2'>{textos[indice]}</span></h2>
            <div className='items-Container'>
                {/* Aquí se renderizarán los items */}
                <p>Cargando productos...</p>    
            </div>
        </div>
    );
};