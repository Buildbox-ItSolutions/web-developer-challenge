import "./styles.css";
import { RxImage } from "react-icons/rx";
import { FiTrash } from "react-icons/fi";
import img from "../../img/Capturar.PNG";

const index = ({ handleFunctions, states }) => {
  return (
    <div className="new-post-container">
      <form>
        {" "}
        <label>
          <div className="preview-post-image">
            {states.preview ? (
              <img src={states.preview} alt="states.Preview" width="200" />
            ) : (
              <RxImage />
            )}
            <input
              type="file"
              onChange={handleFunctions.handlePhotoChange}
              hidden
            />
          </div>{" "}
        </label>
        {states.preview && (
          <FiTrash
            className="delete-icon"
            onClick={handleFunctions.handleRemovePhoto}
          />
        )}
        <input
          type="name"
          value={states.name}
          name="name"
          placeholder="Digite o seu nome"
          onChange={(e) => states.setName(e.target.value)}
        />
        <textarea
          type="text"
          value={states.message}
          name="message"
          placeholder="Mensagem"
          onChange={(e) => states.setMessage(e.target.value)}
        />
      </form>

      <div className="post-buttons">
        {/* <button>Descartar</button> */}
        <span onClick={handleFunctions.handleDiscart}>Descartar</span>
        <button
          className={
            states.photo !== null &&
            states.name.length >= 1 &&
            states.message.length >= 1
              ? "button-active"
              : "button-inactive"
          }
          onClick={handleFunctions.handleSubmit}
        >
          Publicar
        </button>
      </div>
    </div>
  );
};

export default index;
