import ColumnsPositions from '../../components/Column/ColumnsPositions';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => (
  <div className="drawer">
    <input id="edit-columns" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <Navbar />
      <div className="my-3 p-3">
        <div className="flex flex-grow flex-col  mt-4 container-webkit overflow-auto">
          {children}
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="edit-columns" className="drawer-overlay" />

      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <ColumnsPositions />
      </ul>
    </div>
  </div>
);

export default Layout;
