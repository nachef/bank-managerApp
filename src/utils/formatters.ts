import moment from "moment";
import "moment/min/locales";

export function formatDate(date: string) {
  const newDate = moment(date).format("YYYY-MM-DD");
  return newDate;
}

export function formatDateLocale(date: string, locale: string) {
  moment.locale(locale);
  const newDate = moment(date).format("D MMMM YYYY");
  return newDate;
}

export function formatDateAndTimeLocale(date: string, locale: string) {
  moment.locale(locale);
  const newDate = moment(date).format("D MMMM - hh:mm a");
  return newDate;
}

export function getMonthLocale(date: string, locale: string) {
  moment.locale(locale);
  const newDate = moment(date).format("MMM");
  return newDate;
}

export function getDayLocale(date: string, locale: string) {
  moment.locale(locale);
  const newDate = moment(date).format("D");
  return newDate;
}
