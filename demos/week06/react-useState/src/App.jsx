import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BiscuitDiv from "./components/BiscuitsDiv";
export default function App() {
  return (
    <>
      <Header />
      <BiscuitDiv
        name="Chocolate Cookies"
        src="https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Delicious cookie with scrumptious chocolate"
      />
      <BiscuitDiv
        name="Ginger Nuts"
        src="https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Mouth-watering piece of heaven"
      />
      <Footer />
    </>
  );
}
