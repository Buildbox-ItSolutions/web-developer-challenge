import P from 'prop-types';

import notImage from '../../../../images/image@2x.png';
import trash from '../../../../images/trash.png';

import './styles.css';

export const PhotoUpload = ({ setCounter, fields, setFields, nextPhoto }) => {
  const handleCounter = () => {
    setFields({ ...fields, photo: false });
    setCounter((prevCounter) => prevCounter + 1);
  };

  const whatImage = fields.photo ? (
    <img className="image" src={nextPhoto} alt="photo" />
  ) : (
    <img className="notImage" src={notImage} alt="sem imagem" />
  );

  return (
    <div className="wrapper">
      <div onClick={() => setFields({ ...fields, photo: true })} className="photo-upload">
        {whatImage}
      </div>
      {fields.photo && <img onClick={() => handleCounter()} className="trash" src={trash} alt="trash" />}
    </div>
  );
};

PhotoUpload.propTypes = {
  setCounter: P.func,
  fields: P.object,
  setFields: P.func,
  nextPhoto: P.string,
};
