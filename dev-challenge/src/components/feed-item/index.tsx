import React from 'react';

interface FeedItemProps {
    item: {
        name: string;
        message: string;
        image?: string;
    };
    index: number;
    deleteHandler: (index: number) => void;
}

const FeedItem: React.FC<FeedItemProps> = ({ item, index, deleteHandler }) => {
    return (
        <div key={index} className='box mb-10 flex flex-col'>
            <div className='flex'>
                <button
                    onClick={() => deleteHandler(index)}
                    className="icon-delete ml-auto"
                >
                    <img src="img/delete.png" alt="Delete icon" />
                </button>
            </div>

            <div className="flex items-center">
                {item.image && (
                    <img
                        className='max-w-[88px] rounded-md overflow-hidden'
                        src={item.image}
                        alt={`Imagem de ${item.name}`}
                    />
                )}
                <div className='box-info ml-4 mt-0'>
                    <p className='mt-0'>{item.message}</p>
                    <h3 className='title'>
                        <small>Enviado por</small>
                        {item.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default FeedItem;
