import React, { useContext } from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { ThemeContext } from '../../Context/theme';

function ThemeSelect() {
  const { Theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="form-control">
      <label className="input-group input-group-xs mr-4 ">
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="focus:outline-0 capitalize select select-xs text-base-content w-100 "
          defaultValue={Theme}
        >
          <option value="night">Kanban-it</option>
          <option value="cupcake">light</option>
          <option value="halloween">halloween</option>
          <option value="valentine">valentine</option>
          <option value="lemonade">lemonade</option>
          <option value="winter">winter</option>
        </select>
        <span>
          <MdOutlineStyle size={20} className="text-base-content " />
        </span>
      </label>
    </div>
  );
}

export default ThemeSelect;
