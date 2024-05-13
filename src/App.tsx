import Form from "./components/Form";
import "./index.css";

import ListNotes from "./components/ListNotes";
import Header from "./components/Header";

function App() {
  return (
    <div className="  px-5  md:px-16  max-w-7xl h-[100vh] mx-auto ">
      <Header />
      <div className="md:flex gap-5">
        <Form />
        <ListNotes />
      </div>
    </div>
  );
}

export default App;
