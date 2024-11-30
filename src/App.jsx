import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/Searchbox";
import ContactForm from "./components/ContactForm/ContactForm";


function App() {


  

  return (
    <> 
    <div>
      <h1>Phonebook</h1>
 
      <ContactForm />
      <Searchbox  />
      <ContactList />
    </div>
    </>
  );
}

export default App;