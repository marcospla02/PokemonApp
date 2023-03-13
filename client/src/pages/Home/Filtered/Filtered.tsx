import { ActionTypes } from "@/models";
import {
  filterByTypes,
  orderByAttack,
  resetFilters,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useState } from "react";
import {
  Attack,
  ButtonFilter,
  ContainerFiltered,
  Defense,
  Filter,
  Types,
} from "./FilteredCss";

const Filtered = () => {
  const [disabled, setDisabled] = useState({
    orderAttack: false,
    orderDefense: false,
    filterType: false,
  });

  const types = useAppSelector((state) => state.types);

  const dispatch = useAppDispatch();

  const handleSortByAttack = (event: React.SyntheticEvent) => {
    setDisabled({ ...disabled, orderAttack: true });
    let target = event.target as HTMLInputElement;
    const info: ActionTypes = { payload: target.value, type: "Attack" };

    dispatch(orderByAttack(info));
  };

  const handleSortByDefense = (event: React.SyntheticEvent) => {
    setDisabled({ ...disabled, orderDefense: true });

    let target = event.target as HTMLInputElement;
    const info: ActionTypes = { payload: target.value, type: "Defense" };
    dispatch(orderByAttack(info));
  };

  const handleFilterByType = (event: React.SyntheticEvent) => {
    setDisabled({ ...disabled, filterType: true });

    let target = event.target as HTMLInputElement;
    dispatch(filterByTypes(target.value));
  };

  const handleReset = () => {
    const order = document.getElementById("order") as HTMLSelectElement;
    order.selectedIndex = 0;
    const order2 = document.getElementById("order1") as HTMLSelectElement;
    order2.selectedIndex = 0;
    const order3 = document.getElementById("order2") as HTMLSelectElement;
    order3.selectedIndex = 0;
    setDisabled({ orderAttack: false, orderDefense: false, filterType: false });
    dispatch(resetFilters());
  };

  return (
    <ContainerFiltered>
      <Filter>
        <div>
          <ButtonFilter onClick={handleReset}>Reset Filters</ButtonFilter>
        </div>
        <Attack>
          <div id="title">Attack</div>
          <select onChange={(e) => handleSortByAttack(e)} id="order">
            <optgroup label="Attack">
              <option disabled={disabled.orderAttack}>Attack</option>
              <option value="max" id="letter">
                Max
              </option>
              <option value="min" id="letter">
                Min
              </option>
            </optgroup>
          </select>
        </Attack>
        <Defense>
          <div id="title">Defense</div>
          <select onChange={(e) => handleSortByDefense(e)} id="order1">
            <optgroup label="Defense">
              <option disabled={disabled.orderDefense}>Defense</option>
              <option value="max" id="letter">
                Max
              </option>
              <option value="min" id="letter">
                Min
              </option>
            </optgroup>
          </select>
        </Defense>
        <Types>
          <div id="title">Types</div>
          <select onChange={(e) => handleFilterByType(e)} id="order2">
            <optgroup label="Types">
              <option disabled={disabled.filterType}>Types</option>
              {types.length ? (
                types.map((type) => {
                  return (
                    <>
                      <option value={type.name} id="letter">
                        {type.name}
                      </option>
                    </>
                  );
                })
              ) : (
                <p>no se cargaron</p>
              )}
            </optgroup>
          </select>
        </Types>
      </Filter>
    </ContainerFiltered>
  );
};

export default Filtered;
