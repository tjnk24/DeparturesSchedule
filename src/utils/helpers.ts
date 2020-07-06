const capitalize = (value: string): string => value[0].toUpperCase() + value.slice(1);

const getUrlParameter = (value: string): string => {
  const name = value.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export { capitalize, getUrlParameter };
