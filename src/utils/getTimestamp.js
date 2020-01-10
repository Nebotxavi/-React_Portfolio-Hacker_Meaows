export function getTimestamp(timeReq) {
  console.log("for parameter: ", timeReq);
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
