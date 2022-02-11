export const convertFileToBlob = async (file?: File) =>
  file
    ? new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type })
    : undefined;

export const isFileImage = (file?: File) => file && file.type.includes('image');
