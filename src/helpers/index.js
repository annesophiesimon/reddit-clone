export const convertTime = (datePast) => {
  var dateNow = Date.parse(new Date());
  var date = new Date(datePast * 1000);

  var seconds = Math.floor((dateNow - date) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  const minuteTxt = minutes > 1 ? 'minutes' : 'minute';
  const hourTxt = hours > 1 ? 'hours' : 'hour';
  const dayTxt = days > 1 ? 'days' : 'day';

  if (minutes < 59 && hours < 1) {
    return `${minutes} ${minuteTxt} ago`;
  } else if (hours < 24 && days < 1) {
    return `${hours} ${hourTxt} ago`;
  } else return `${days} ${dayTxt} ago`;
};

export const checkURL = (url) => {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
