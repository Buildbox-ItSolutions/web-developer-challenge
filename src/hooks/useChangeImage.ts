import { useState } from "react";

interface ChangeImageProps {
    currentImageIndex: number;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
    handleTrashClick: () => void;
}

export const images = [
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlumc7xwdsTAe283f8_HyvAVG7SsOARSf00ls4UNOcIg&s", index: 0 },
    { url: "https://i.pinimg.com/236x/86/a3/f2/86a3f2bb96027682bf565bc383afd3e9.jpg", index: 1 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMQ6jEr0z8T11kJNfWZszfksdzdQRW_wY0EJAUKhq6dqrX1MJbBma4AspbQhTFkSASIA&usqp=CAU", index: 2 },
    { url: "https://i.pinimg.com/236x/b6/07/41/b60741b4bbf181d15bf26b05c55ab60d.jpg", index: 3 },
    { url: "https://i.pinimg.com/736x/63/a1/2b/63a12b99c2a22da90f9a4a6c36e9b0ef.jpg", index: 4 },
    { url: "https://i.pinimg.com/originals/37/d8/9f/37d89fa0319df50c1a473e07e24db45e.jpg", index: 5 },
];

export const useChangeImage = (): ChangeImageProps => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handleTrashClick = (): void => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return {
        currentImageIndex,
        setCurrentImageIndex,
        handleTrashClick
    };
}