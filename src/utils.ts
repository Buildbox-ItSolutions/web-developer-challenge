export const getBase64 = (file: File) =>
  new Promise<string>((resolve) => {
    if (process.env.NODE_ENV === 'test') {
      resolve('mock');
    } else {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result as string));

      reader.readAsDataURL(file);
    }
  });
