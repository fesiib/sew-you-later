import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {useSelector} from 'react-redux';

const propConstUS = {
    desc: "Sort By:",
}

const propConstTR = {
    desc: "Göre Sırala",
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SortBy(props) {

    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);
    const [chosenOption, setChosenOption] = useState(props.options[0]);

    useEffect(() => {
        // console.log('sorted');
        props.parentUpdate(chosenOption);
    }, [chosenOption]);

    const chooseOption = (option) => {
        setChosenOption(option);
        // and call some functions regarding the organization stuff
        // it may make sense to call a function from props
        // that are passed from the parent page (such as discussion or order list pages)
    };
    
    return (
        <div className="flex flex-col z-10 w-48">
            <p className="mb-0.5 text-xs">{propConst.desc}</p>
            <Menu as="div" className="relative w-full text-left">
            {({ open }) => (
                <>
                <div>
                    <Menu.Button className="inline-flex justify-between w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {chosenOption}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                    <div className="py-1">
                        {(props.options.map((option) => 
                            <Menu.Item>
                            {({ active }) => (
                                <div
                                    onClick={() => chooseOption(option)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                >
                                    {option}
                                </div>
                            )}
                            </Menu.Item>
                        ))}
                    </div>
                    </Menu.Items>
                </Transition>
                </>
            )}
            </Menu>
        </div>
    );

};

export default SortBy;