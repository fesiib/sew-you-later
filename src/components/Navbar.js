import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Notification from './Notification';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../reducers/language';

function checkActiveWindow() {
    var active_path = window.location.pathname
    var active_arr = [false, false, false]
    if (active_path === "/new-orders") active_arr[0] = true
    else if (active_path === "/current-orders") active_arr[1] = true
    else if (active_path === "/previous-orders") active_arr[2] = true
    else return active_arr
    return active_arr
}

const activeWindow = checkActiveWindow()

const propConstUS = {
    newOrders: 'New Orders',
    currentOrders: 'Current Orders',
    previousOrders: 'Completed Orders',

    language: "Language",
    english: "English (ENG)",
    turkish: "Türkçe (TUR)"
}

const propConstTR = {
    newOrders: 'Yeni Siparişler',
    currentOrders: 'Mevcut Siparişler',
    previousOrders: 'Önceki Siparişler',

    language: "Dil",
    english: "English (ENG)",
    turkish: "Türkçe (TUR)"
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
    const language = useSelector(state => state.langReducer.language);
    const propConst = (language == "TUR" ? propConstTR : propConstUS);

    const navigation = [
        { name: propConst.newOrders, href: '/new-orders', current: activeWindow[0], cntNotifications: 0 },
        { name: propConst.currentOrders, href: '/current-orders', current: activeWindow[1], cntNotifications: 0 },
        { name: propConst.previousOrders, href: '/previous-orders', current: activeWindow[2], cntNotifications: 0 }, // this should always have 0 notficiations
    ]

    const dispatch = useDispatch();

    function changeLang(lang) {
        return () => {
            switch (lang) {
                case "ENG": {
                    dispatch(changeLanguage("ENG"));
                    break;
                }
                case "TUR": {
                    dispatch(changeLanguage("TUR"));
                    break;
                }
                default: break;
            }

        }
    };

    const newOrdersList = useSelector(state => state.newOrdersList);
    const curOrdersList = useSelector(state => state.curOrdersList);

    navigation[0].cntNotifications = newOrdersList.reduce((acc, ord) => acc + (ord.unseen === true ? 1 : 0), 0);
    navigation[1].cntNotifications = curOrdersList.reduce((acc, ord) => acc + (ord.notificationPage !== "X" ? 1 : 0), 0);

    return (
        <Disclosure as="nav" className="sticky top-0 z-20 bg-indigo-900">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">{propConst.language}</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href="/new-orders"><h1 className="text-white">Sew You Later!</h1></a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex px-4 space-x-4 ml-20">
                                        {navigation.map((item, index) => (
                                            <div className="px-3 py-3" key={index}>
                                                <Notification position="top-right" size="h-6 w-6" data={item.cntNotifications}>
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                                                            'rounded-md text-sm text-center px-3 py-3'
                                                        )}
                                                        style={{ fontSize: "20px" }}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </Notification>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-indigo-900 flex text-sm rounded-full hover:bg-white hover:text-indigo-900 focus:outline-none">
                                                    <span className="sr-only">{propConst.language}</span>
                                                    <div className="flex flex-row space-x-2">
                                                        <p>{language}</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                                        </svg>
                                                    </div>
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
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                onClick={changeLang("ENG")}
                                                                className={classNames(
                                                                    active ? 'bg-indigo-100' : '',
                                                                    'block px-4 py-2 text-sm text-indigo-700'
                                                                )}
                                                            >
                                                                {propConst.english}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                onClick={changeLang("TUR")}
                                                                className={classNames(
                                                                    active ? 'bg-indigo-100' : '',
                                                                    'block px-4 py-2 text-sm text-indigo-700'
                                                                )}
                                                            >
                                                                {propConst.turkish}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item, index) => (
                                <div className="px-6 py-3" key={index}>
                                    <Notification position="top-right" size="h-6 w-6" data={item.cntNotifications}>
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-indigo-900 text-white' : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    </Notification>
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar