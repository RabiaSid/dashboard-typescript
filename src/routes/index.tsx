import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';

export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
    </Router>
    </>
  )
}
