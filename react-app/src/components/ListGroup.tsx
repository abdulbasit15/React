import { Fragment, useState } from "react";

// {items: [], heading: strting} }
interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const [selectedIndex, setSelectedIndex] = useState(-1);

function ListGroup({ items, heading, onSelectItem }: props) {
  // Event handler
  //const handleClick = (event: React.MouseEvent) => console.log(event);

  //let selectedIndex = 0;
  // Hook

  const getMessage = () => {
    return items.length === 0 ? "No items found" : { items };
  };

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && "no items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
