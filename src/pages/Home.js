import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {

    return (
        <div>
            <Header />
            <Card title="interview prep"/>
            <div>
                - Review data structures
            </div>
            <div>
                - Review basic algorithms
            </div>
            <div>
                - Show example of array operations and document the runtimes for operations(insertion/deletion) here
            </div>
            <div>
                - Show example of tree traversal here and quick sort
            </div>
            <div>
                - Choose a design architecture for frontend application and explain design choice
            </div>
        </div>
    );
}