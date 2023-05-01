export const dateStringToDate = (dateString: string): Date => {
  //  28/10/2018
  const dateToParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateToParts[2], dateToParts[1] - 1, dateToParts[0]);
};
