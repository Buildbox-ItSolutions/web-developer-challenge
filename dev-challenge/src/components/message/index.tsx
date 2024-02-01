import React, { useEffect, useState } from 'react';
import { Message } from '../../pages/home';

interface ListMessage {
    messages: [],
}

/*const ListMessages: React.FC = (props:ListMessage) => {
    return (
            <>
            {props.messages.length > 0 && (
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-9">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 mt-4">Lista de mensagens</h2>
                    {props.messages.map((item, index) => (
                        <div key={index}>
                            <button
                                //onClick={() => deleteRegister(index)}
                                className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Excluir
                            </button>
                            {item.image && <img className='max-w-[200px]' src={item.image} alt={`Imagem de ${item.name}`} />}
                            <h2>{item.name}</h2>
                            <p>{item.message}</p>
                        </div>
                    ))}
                </div>
            )}
            </>
    )
}

export default ListMessages;*/