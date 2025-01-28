import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        {/* <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<RecentActivity />} />
          <Route path='project/:id' element={<Project />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;
