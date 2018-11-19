import _ from "lodash";

const scheduleMap = {
  1: {
    hours: 9,
    minutes: 0
  },
  2: {
    hours: 10,
    minutes: 30
  },
  3: {
    hours: 11,
    minutes: 50
  },
  4: {
    hours: 13,
    minutes: 40
  },
  5: {
    hours: 15,
    minutes: 10
  },
  6: {
    hours: 16,
    minutes: 40
  },
  7: {
    hours: 19,
    minutes: 30
  }
};

export const format = date => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDay();
  const year = dateObj.getFullYear();
  const monthString = month < 10 ? `0${month}` : month;
  const dayString = day < 10 ? `0${day}` : day;

  return `${year}-${monthString}-${dayString}`;
};

export const timeFormat = date => {
  const dateObj = new Date(date);
  return new Date(
    dateObj.setHours(dateObj.getUTCHours(), dateObj.getUTCMinutes())
  )
    .toTimeString()
    .substr(0, 5);
};

export const lessonTime = (date, lessonNumber) => {
  const dateObj = new Date(date);
  const { hours, minutes } = scheduleMap[lessonNumber];
  const lesson = new Date(dateObj.setHours(hours, minutes));

  return new Date(new Date().setHours(lesson.getUTCHours(), lesson.getUTCMinutes()));
};

export const getLessonNumber = date => {
  const dateObj = new Date(date);

  return _.findKey(scheduleMap, {
    hours: dateObj.getUTCHours(),
    minutes: dateObj.getUTCMinutes()
  });
};
