import './App.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchHighLightsData, fetchIncomeData, fetchCountriesData, fetchBuyersData } from './redux/actions/app.actions';
import Header from './common/Header';
import Card from './common/Card';
function App() {
  const dispatch = useDispatch();
  const { income, highLights, countries, buyers } = useSelector((state: any) => state.appReducer);

  useEffect(() => {
    dispatch(fetchHighLightsData('get_highlight'));
    dispatch(fetchIncomeData('get_income'));
    dispatch(fetchCountriesData('get_country'));
    dispatch(fetchBuyersData('get_buyer'));
  }, []);

  return (
    <div className="App">
      <Header />
      <section>
      <Card headerTitle="Highlights" data={highLights} />
      <Card headerTitle="Buyers" data={buyers} />
      <Card headerTitle="Countries" data={countries} />
      <Card headerTitle="Income" data={income} />
      </section>
    </div>
  );
}

export default App;
