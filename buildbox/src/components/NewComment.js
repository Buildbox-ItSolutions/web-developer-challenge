import React from "react";

const NewComment = () => {
    return(
<div>
      <div class="nova-image">
        <input class="image" />
      </div>
      
      <div class="novo-nome">
      <input type="text" class="todo-input" placeholder="Digite seu nome" />
      </div> 

      <div class="nova-mensagem">
      <input type="text" class="todo-input" placeholder="Mensagem" />
      </div>

      <button class="submit-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </div>
    );
};

export default NewComment;
