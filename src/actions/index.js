const API_KEY = 'fe0136742650ce5b3f62ffd54d15c141';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}