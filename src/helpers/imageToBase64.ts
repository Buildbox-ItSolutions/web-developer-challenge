export const getBase64 = (file: File) => {
    return new Promise(resolve => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        };
    });
};