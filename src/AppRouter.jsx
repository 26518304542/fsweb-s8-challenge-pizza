import { Routes, Route } from 'react-router-dom';
import App from './App';
import OrderPage from './components/orderpage';
import SuccessPage from './components/SuccessPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
