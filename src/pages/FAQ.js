import Navbar from '../components/Navbar';
import QandA from '../components/QandA';

function FAQ() {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="my-8">Frequently Asked Questions</h1>
                <QandA />
                <QandA />
                <QandA />
                <QandA />
                <QandA />
                <QandA />
                <QandA />
                <QandA />
            </div>
        </div>
    );
}

export default FAQ;
