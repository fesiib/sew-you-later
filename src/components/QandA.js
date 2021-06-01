import { Disclosure } from '@headlessui/react'

const propConst = {
    question: "QUESTION",
    answer: "ANSWER"
}

function QandA(props) {
    return (
        <Disclosure className="bg-white">
            {({ open }) => (
                <>
                    <div className="w-auto mb-8 rounded-lg px-4 py-4 bg-white space-y-4">
                        <div id="question" className="space-y-2">
                            <div id="qIcon" className="flex-none w-28 h-8 bg-red-500 text-white font-bold text-lg rounded-lg text-center px-2 py-0.5">
                                {propConst.question}
                                </div>
                            <div id="qBody" className="">{props.question}</div>
                        </div>
                        <div id="answer" className="space-y-2">
                            <div id="aIcon" className="flex-none w-24 h-8 bg-green-500 text-white font-bold text-lg rounded-lg text-center px-2 py-0.5">
                                {propConst.answer}
                                </div>
                            <div id="aBody" className="">{props.answer}</div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default QandA