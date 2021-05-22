import { Component } from "react";
import { Disclosure } from '@headlessui/react'

class QandA extends Component {
    render() {
        return (
            <Disclosure className="bg-white">
                {({ open }) => (
                    <>
                        <div className="w-auto mr-16 rounded-lg px-4 py-4 bg-white space-y-4">
                            <div id="question" className="space-y-2">
                                <div id="qIcon" className="flex-none w-28 h-8 bg-red-500 text-white font-bold text-lg rounded-lg text-center px-2 py-0.5">
                                    QUESTION
                                </div>
                                <div id="qBody" className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada, elit ac aliquam facilisis,
                                    risus quam condimentum risus, vel sodales velit nunc sed nunc.
                                </div>
                            </div>
                            <div id="answer" className="space-y-2">
                                <div id="aIcon" className="flex-none w-24 h-8 bg-green-500 text-white font-bold text-lg rounded-lg text-center px-2 py-0.5">
                                    ANSWER
                                </div>
                                <div id="aBody" className="">
                                    Aenean vulputate justo quis lectus imperdiet posuere. Sed nunc nisl, venenatis at est eu, malesuada porta
                                    erat. Donec eget lobortis tortor. Suspendisse imperdiet sapien sapien, id vestibulum erat condimentum non.
                                    Curabitur dapibus pharetra vehicula. Cras in sapien quam. Integer sagittis magna tempor turpis ultrices
                                    consequat. Ut pharetra elit pretium pulvinar fringilla. Ut bibendum, nisi quis tincidunt interdum, nibh
                                    dolor hendrerit leo, vitae commodo erat nulla vitae felis. Etiam aliquet pharetra metus, congue malesuada
                                    nulla vestibulum vitae.
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        )
    }
}

export default QandA