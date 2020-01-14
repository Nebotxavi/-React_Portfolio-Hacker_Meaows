export function getTimestamp(timeReq) {
  if (timeReq === "All time") return;

  const timeToSubs =
    timeReq === "Last 24h"
      ? 1
      : timeReq === "Past Week"
      ? 7
      : timeReq === "Past Month"
      ? 30
      : 365;

  const date = new Date();
  const timeReqDate = date.getDate() - timeToSubs;
  date.setDate(timeReqDate);
  return date.getTime() / parseFloat(1000);
}

export function getTimeAgo(timeStamp) {
  let now = new Date();
  let dateInSeconds = new Date(timeStamp * 1000);
  let diffTime = (now.getTime() - dateInSeconds.getTime()) / 1000;

  let minute = 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let year = month * 12;

  let ago =
    diffTime > year
      ? Math.floor(diffTime / year) +
        " year" +
        (Math.floor(diffTime / year) > 1 ? "s" : "")
      : diffTime > month
      ? Math.floor(diffTime / month) +
        " month" +
        (Math.floor(diffTime / month) > 1 ? "s" : "")
      : diffTime > day
      ? Math.floor(diffTime / day) +
        " day" +
        (Math.floor(diffTime / day) > 1 ? "s" : "")
      : diffTime > hour
      ? Math.floor(diffTime / hour) +
        " hour" +
        (Math.floor(diffTime / hour) > 1 ? "s" : "")
      : Math.floor(diffTime / minute) +
        " minute" +
        (Math.floor(diffTime / minute) > 1 ? "s" : "");

  return ago + " ago";
}
