import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import ParticipantsList from "../../components/EntrantsList /ParticipantsList";

const Home = () => {
  return (
    <Card>
      <section>
        <h2>Vamos Começar!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Home;
