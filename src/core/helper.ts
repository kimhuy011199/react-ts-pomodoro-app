export const convertMinsToSecs = (inputMins: number) => inputMins * 60;

export const convertSecsToMins = (inputSecs: number) => {
  const mins = Math.floor(inputSecs / 60);
  const secs = inputSecs - mins * 60;
  const formatedMins = mins < 10 ? `0${mins}` : mins;
  const formatedSecs = secs < 10 ? `0${secs}` : secs;
  return `${formatedMins}:${formatedSecs}`;
};
