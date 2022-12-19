import React, { useContext } from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { ThemeContext } from '../../Context/theme';

function ThemeSelect() {
  const { Theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="form-control">
      <label className="input-group input-group-sm">
        <span><MdOutlineStyle size={20} className="text-base-content" /></span>
        <select onChange={(e) => setTheme(e.target.value)} className="focus:outline-0 capitalize select select-sm text-base-content w-100 mr-4" defaultValue={Theme}>
          <option value="light">light</option>
          <option value="night">night</option>
          <option value="black">black</option>
          <option value="halloween">halloween</option>
          <option value="business">business</option>
          <option value="cupcake">cupcake</option>
          <option value="emerald">emerald</option>
          <option value="retro">retro</option>
          <option value="valentine">valentine</option>
          <option value="lemonade">lemonade</option>
          <option value="winter">winter</option>
          <option value="coffe">retro</option>
          <option value="luxury">luxury</option>
          <option value="wireframe">wireframe</option>
        </select>
      </label>
    </div>

  );
}

export default ThemeSelect;
