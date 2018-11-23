import _ from "lodash";
import { scheduleTimeMap } from "../../constants";

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
    dateObj.setHours(dateObj.getHours(), dateObj.getMinutes())
  )
    .toTimeString()
    .substr(0, 5);
};

export const timeFormatUTC = date => {
  const dateObj = new Date(date);
  return new Date(
    dateObj.setHours(dateObj.getUTCHours(), dateObj.getUTCMinutes())
  )
    .toTimeString()
    .substr(0, 5);
};

export const getLessonTime = (date, lessonNumber) => {
  const dateObj = new Date(date);
  const { hours, minutes } = scheduleTimeMap[lessonNumber];
  const lesson = new Date(dateObj.setHours(hours, minutes));

  return new Date(new Date().setHours(lesson.getHours(), lesson.getMinutes()));
};

export const getLessonNumber = date => {
  const dateObj = new Date(date);

  return _.findKey(scheduleTimeMap, {
    hours: dateObj.getHours(),
    minutes: dateObj.getMinutes()
  });
};

export const toUTC = (date) => {
  const dateObj = new Date(date);
  return new Date(
    dateObj.setHours(dateObj.getUTCHours(), dateObj.getUTCMinutes())
  )
}