export const convertFileToBlob = async (file?: File) => {
  if (file) {
    return new Blob([new Uint8Array(await file.arrayBuffer())], {
      type: file.type,
    });
  }
};

export const isFileImage = (file?: File) => file && file.type.includes('image');
