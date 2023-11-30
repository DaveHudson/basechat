import type { NavigationItem } from "@/app/navigation";
import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Cog6ToothIcon, RectangleGroupIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

export default function NavigationMobile({
  navigation,
  sidebarOpen,
  setSidebarOpen,
}: {
  navigation: NavigationItem[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 bg-white dark:bg-gray-800">
                <div className="flex h-16 shrink-0 items-center">
                  <RectangleGroupIcon className="h-8 w-auto stroke-sky-600" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={cn(
                                item.current
                                  ? "bg-gray-50 text-sky-600 dark:text-gray-800 dark:bg-gray-200"
                                  : "text-gray-700 dark:text-gray-300 hover:text-sky-600 hover:bg-gray-50 dark:hover:text-gray-300 dark:hover:bg-gray-700",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className={cn(
                                  item.current ? "text-sky-600" : "text-gray-400 group-hover:text-sky-600",
                                  "h-6 w-6 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <Link
                        href="/settings"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 hover:bg-gray-50 hover:text-sky-600 dark:hover:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Cog6ToothIcon
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-sky-600"
                          aria-hidden="true"
                        />
                        Settings
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
