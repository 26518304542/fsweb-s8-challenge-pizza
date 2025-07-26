import { Routes, Route } from 'react-router-dom';
import App from './App';
import OrderPage from './components/OrderPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orderpage" element={<OrderPage />} />
    </Routes>
  );
}
