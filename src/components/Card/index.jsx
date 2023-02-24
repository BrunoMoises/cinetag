import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

import React from 'react'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Card({ id, titulo, capa }) {
    const { favorito, adiconarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adiconarFavorito({ id, titulo, capa })
            }} />
        </div>
    )
}
