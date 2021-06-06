import Navbar from '../components/Navbar';
import QandA from '../components/QandA';
import {useSelector} from 'react-redux';

const propConst = {
    questions: [
        ["I want to see if there is any new order. How can I know that?", 
        "There will be a number in a red circle shown on the top right corner of the \"New Orders\" tab. "
        + "The number represents the number of new orders that have not been viewed by you yet."],
    
        ["What are the red circles with numbers? How do I get rid of them?", 
        "Those red circles are notifications for new incoming orders or order updates, for example, " 
        + "if the customer completes the measurement form, then the red circle will appear at the"
        + "\"Current Orders\" tab. The number refers to the amount of new updates/orders. You can get"
        + "rid of them by clicking each order to view and read the updates."],
    
        ["If I accidentally accepted an order, can I cancel it?",
        "Unfortunately, cancellling order is not currently doable. Please be careful when you accept the"
        + " order."],
    
        ["I have green and yellow bars in Current Orders page. What do they mean?",
        "In the progress bar, which has 6 equally-lengthed bars, each block represents the status of that"
        + " step. Green color means that the step is already completed. Yellow color means that you are "
        + "currently in that step."],
    
        ["I am currently in the discussion with the customer but I want to see the order details. What"
        + " should I do?", 
        "On the left purple panel, when you move your cursor over the panel, it will expand. There, you "
        + "can access to the order details by clicking on the button. With this panel, you can go to "
        + "measurements page and see the reports as well."],
    
        ["In the discussion page, I want to deselect an image. How can I do that?",
        "Click on the selected image. Another window will pop-up. To deselect the image, you can click "
        + "on the trash icon at the top-right corner (the largest one) next to an \"X\" mark."],
    
        ["By clicking on the \"X\" mark of a note, what will happen?",
        "It will just close the pop-up window. Be relieved! You can close the window by clicking anywhere"
        + " outside the pop-up window too."],
    
        ["I sent the measurement form to the customer already. How can I know when the customer responds?",
        "In the Current Orders page, there will be a notification alert (red circle) appearing on the "
        + "top left of that order. The status of the measurement record in the progress bar will be yellow"
        + "as well. When you enter the measurements page of that order, the measurements will be auto"
        + "matically shown on that page."],
    
        ["I am running out of time. How can I extend the due?",
        "You can manually adjust the due date by yourself at the Current Orders page by clicking on the "
        + "date beside \"Estimated Due\"."],
    ]
}

function FAQ() {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="my-8">Frequently Asked Questions</h1>
                {propConst.questions.map(function (question) {
                    return <QandA question={question[0]} answer={question[1]} />;
                })}
            </div>
        </div>
    );
}

export default FAQ;
