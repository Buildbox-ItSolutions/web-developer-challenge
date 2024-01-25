interface postInterface {
    name: string;
    message: string;
    image: string;
};

export const addPost = (value:postInterface)=> ({
    type: 'ADD_NEW_POST',
    newValue: value
});