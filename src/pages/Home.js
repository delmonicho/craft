import Card from "../components/Card";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {

    return (
        <div class="home-container">
            <Header />
            <Card title="ohcin touba"/>
            <Card title="portfolio"/>
        </div>
    );
}