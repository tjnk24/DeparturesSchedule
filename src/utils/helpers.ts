import { MixedValueTypes } from '@apptypes/components';

export const capitalize = (value: string): string => value[0].toUpperCase() + value.slice(1);

export const getUrlParameter = (value: string): string => {
  const name = value.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getLocal = (
  value: string,
): JSON | null => JSON.parse(
  localStorage.getItem(value) as string,
);

export const setLocal = (
  value: string,
  item: MixedValueTypes,
): void => localStorage.setItem(value, JSON.stringify(item));
