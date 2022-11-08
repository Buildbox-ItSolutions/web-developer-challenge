export const sortArrayByDate = (data: any[], key: string) => {
  data.sort((a: any, b: any): any => {
    if (a[key] && b[key]) {
      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    }
  });

  return data;
};
