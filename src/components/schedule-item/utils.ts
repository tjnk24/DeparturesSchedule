const evaluateTime = (hr, min) => {
  let targetDate = new Date().setHours(hr, min);

  if (Date.now() > targetDate) {
    const now = new Date();

    targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      hr,
      min,
    );
  }
  return Math.floor((targetDate - Date.now()) / 1000);
};

export default evaluateTime;
