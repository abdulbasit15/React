import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston"];

  const handlSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    // each ListGroup component will have its own state
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handlSelectedItem}
    //   />
    //   <ListGroup
    //     items={items}
    //     heading="Colors"
    //     onSelectItem={handlSelectedItem}
    //   />
    // </div>

    <div>
      <Alert>
        Hello <span> World </span>
      </Alert>
    </div>
  );
}

export default App;
