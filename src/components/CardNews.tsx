import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { ItemsTypes } from '../types';
import imageHeartRed from '../assets/Group 268.svg';
import imageHeartWhite from '../assets/Group 268(1).svg';
import styles from '../styles/CardNews.module.css';

type CardNewsProps = {
  titulo: string;
  introducao: string;
  data_publicacao: string;
  item: ItemsTypes
  link: string;
  imagens: string,
  index: number,
};

function CardNews({ titulo, introducao, data_publicacao, item,
  link, imagens, index }: CardNewsProps) {
  const { toggleFavorite, theme } = useContext(DataContext);
  console.log(imagens);
  const image = JSON.parse(imagens);
  const partsLink = link.split('/');
  const resultLink = partsLink.slice(0, 3).join('/');
  const [checked, setChecked] = useState(false);

  const redirectToSite = () => {
    window.open(link, '_blank');
  };

  const calculateDays = (day: string) => {
    const dayPublication = day.split(' ');
    const dataPublication = dayPublication[0];
    const partesData = dataPublication.split('/');
    const today = new Date();
    const dataNews = new Date(
      Number(partesData[2]),
      Number(partesData[1]) - 1,
      Number(partesData[0]),
    );
    const diffTime = Math.abs(Number(today) - Number(dataNews));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleChecked = () => {
    setChecked(!checked);
    toggleFavorite(item);
  };

  return (
    <div className={ theme ? styles.containerDark : styles.container }>
      {index === 0
      && <img
        src={ `${resultLink}/${image.image_intro}` }
        alt=""
        className={ styles.imageFirst }
      />}
      <h1 className={ styles.title }>{titulo}</h1>
      <p>
        Publicado há
        {' '}
        {calculateDays(data_publicacao)}
        {' '}
        {' dia (s)'}
      </p>
      <p className={ styles.introcucao }>{introducao}</p>
      <span className={ styles.data_publicacao }>{data_publicacao}</span>
      <div className={ styles.inputAndButton }>
        <label data-testid="checkbox-favorites">
          {checked ? <img src={ imageHeartRed } alt="favorite" />
            : <img src={ imageHeartWhite } alt="favorite" />}
          <input
            type="checkbox"
            checked={ checked }
            onChange={ handleChecked }
            style={ { appearance: 'none' } }
          />
        </label>
        <button
          className={ styles.button }
          onClick={ redirectToSite }
        >
          leia a notícia aqui

        </button>
      </div>
    </div>
  );
}
export default CardNews;
