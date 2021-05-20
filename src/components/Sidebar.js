import { Component } from "react";
import { Disclosure } from '@headlessui/react'

import "./Sidebar.css"

class Sidebar extends Component {
    render() {
        return (
            <Disclosure className="bg-indigo-900">
                {({ open }) => (
                    <>
                        <div className="fixed z-20 px-2 py-2 text-white rounded-lg ml-8 inset-0 flex-none h-60 bg-indigo-900 mt-60 shadow-2xl" style={{ width: "4.5rem" }}>
                            <button id="menuButton" className="transform duration-300 bg-indigo-900 hover:bg-indigo-900 rounded-lg h-14 w-14 hover:w-44 flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <p id="label">Order Details</p>
                            </button>
                            <button id="menuButton" className="transform duration-300 bg-indigo-900 hover:bg-indigo-900 rounded-lg h-14 w-14 hover:w-52 flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <p id="label">Discussion Notes</p>
                            </button>
                            <button id="menuButton" className="transform duration-300 bg-indigo-900 hover:bg-indigo-900 rounded-lg h-14 w-14 hover:w-44 flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                                </svg>
                                <p id="label">Measurements</p>
                            </button>
                            <button id="menuButton" className="transform duration-300 bg-indigo-900 hover:bg-indigo-900 rounded-lg h-14 w-14 hover:w-32 flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p id="label">Reports</p>
                            </button>
                        </div>
                    </>
                )}
            </Disclosure>
        )
    }
}

export default Sidebar