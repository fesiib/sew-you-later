import { Component } from "react";
import { Disclosure } from '@headlessui/react'

import "./Sidebar.css"

class FAQ extends Component {
    render() {
        return (
            <Disclosure className="">
                {({ open }) => (
                    <>
                        <button id="menuButton" className="transform duration-500 bottom-0 right-0 mr-8 mb-8 fixed z-20 h-14 w-14 hover:w-48 rounded-full bg-green-400 hover:bg-green-500 shadow-2xl">
                            <p id="label" className="mr-2">How to Use?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 visible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </>
                )}
            </Disclosure>
        )
    }
}

export default FAQ