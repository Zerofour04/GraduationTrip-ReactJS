import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: '47e51299e3d061234371dc3b524ea1c9',
      lat: '44.86833',
      lon: '13.84806',
      lang: 'de',
      unit: 'metric', // values are (metric, standard, imperial)
    });

    return (
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Banjole"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
};

export default Weather;
