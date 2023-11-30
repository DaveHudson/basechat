import type { NavigationItem } from "@/app/navigation";
import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
                  <svg
                    className="h-8 w-auto"
                    width="290"
                    height="288"
                    viewBox="0 0 290 288"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-gray-900 dark:fill-white"
                      d="M129.594 0.218718C96.2344 4.43747 66.8594 18.7343 43.2656 42.3281C14.2031 71.3125 -0.406264 107.875 0.921861 148.578C2.24999 192.641 24.2031 233.266 61.625 261.234C79.8281 274.75 103.266 284.047 127.797 287.25C137.719 288.578 158.734 287.875 170.375 285.766C192.172 281.937 214.438 272.016 231.859 258.5C241.391 251.156 256.391 235.766 262.562 227.094C269.125 217.875 278.656 198.969 282.25 188.031C287.797 171 290.297 153.109 289.516 136.312C288.266 111.156 278.187 82.4062 262.953 61.0781C256.391 51.8593 242.562 37.4062 233.891 30.6093C216.156 16.7812 195.219 7.09371 172.953 2.40621C165.219 0.843708 160.844 0.374963 147.953 0.140588C139.359 -0.0156621 131.078 0.0624677 129.594 0.218718ZM130.922 21.3906C134.516 23.0312 136.703 27.6406 135.844 31.4687C135.531 32.875 132.797 37.3281 129.75 41.3125C123.109 50.2187 116.547 61.3125 117.562 62.1718C121.781 66 154.828 67.25 166.625 63.9687C170.062 63.0312 172.953 62.0937 173.187 61.9375C173.656 61.3906 165.922 48.8906 160.844 42.0156C154.594 33.5781 153.578 31.3906 154.203 28.0312C155.375 21.7031 162.016 18.5781 168.109 21.5468C173.5 24.125 184.906 38.4218 190.922 49.9062C192.25 52.4062 193.578 54.4375 193.969 54.4375C194.359 54.4375 198.187 52.4843 202.406 50.0625C206.547 47.6406 211.391 45.5312 213.031 45.2968C219.047 44.5156 224.125 49.2812 224.125 55.9218C224.125 62.1718 221.703 64.6718 208.344 71.9375L201.547 75.6093L202.641 78.1093C206.547 87.5625 212.328 113.031 213.5 126.703C213.812 129.672 214.203 133.344 214.437 134.672L214.828 137.25H247.797L247.328 131.391C246.703 124.359 244.437 113.578 242.172 107.172C240.219 101.703 240.141 98.8906 241.703 95.8437C244.203 90.9218 251.781 89.5937 256.078 93.1875C261.391 97.6406 266.781 113.344 268.734 129.516C271.391 152.797 264.672 187.484 255.922 195.687C251.781 199.594 244.203 198.422 241.703 193.5C240.141 190.453 240.219 187.719 242.094 182.328C244.281 176.156 246.781 165.531 246.781 162.406V159.906H214.125L213.656 165.141C212.094 180.297 208.266 198.812 204.047 211.234C202.562 215.687 201.469 219.516 201.547 219.594C201.703 219.75 205.531 221.703 209.984 224.047C219.75 229.125 223.031 231.937 223.812 236C224.437 239.594 222.172 245.062 219.125 247.016C214.75 249.906 211.703 249.516 201.703 244.75C195.844 241.859 192.406 240.609 192.172 241.234C192.016 241.703 189.828 245.141 187.328 248.891C181.547 257.484 174.125 265.922 170.062 268.656C163.891 272.797 156.781 270.766 154.594 264.203C153.344 260.375 154.516 257.328 159.359 251.625C164.203 246 171.781 235.375 171.781 234.281C171.781 230.687 141 228.734 126.469 231.469C122.719 232.094 119.281 232.953 118.734 233.344C117.484 234.047 119.906 237.875 127.719 247.484C134.203 255.375 135.844 258.187 135.844 261.312C135.844 268.578 128.422 273.109 121.859 269.75C118.344 267.875 108.344 256.703 102.562 248.187C99.6719 243.891 97.0937 240.375 96.8594 240.375C96.5469 240.375 92.5625 242.328 87.7969 244.672C78.7344 249.281 76.3125 249.75 72.0156 247.641C68.3437 245.922 66.3125 242.484 66.3125 237.875C66.3125 232.562 69.4375 229.437 80.2187 223.734L88.8125 219.203L86.625 213.031C82.0937 200.687 77.7187 180.062 76.7031 166.312L76.2344 159.906H59.5937C50.375 159.906 42.875 160.062 42.875 160.297C42.875 161.625 46.3906 176.156 47.9531 181.469C50.2187 188.969 50.2969 190.453 48.7344 193.5C46.5469 197.797 40.5312 199.437 35.8437 197.016C32.7969 195.453 30.2187 190.844 26.9375 181C22.4844 167.641 21.625 162.406 21.2344 146.625C20.7656 129.906 21.7031 122.719 26.0781 109.281C28.8906 100.531 32.0937 94.5937 35.1406 92.4062C39.125 89.6718 46.4687 91.4687 48.7344 95.8437C50.375 98.9687 50.2187 100.922 47.9531 107.641C45.7656 113.812 42.875 129.203 42.875 134.203V137.25H59.2031C77.7187 137.25 76.4687 137.797 76.4687 130.219C76.4687 120.297 81.9375 93.5 86.3125 82.0156C87.3281 79.125 88.1094 76.3906 87.875 75.8437C87.7187 75.2968 84.2812 73.1875 80.2969 71.1562C72.25 66.9375 66.7031 62.25 65.9219 58.8906C64.3594 52.7968 68.8906 46 74.9062 45.2968C78.0312 44.9843 79.3594 45.4531 86.7812 49.2812C91.3125 51.7031 95.6094 53.6562 96.2344 53.6562C96.8594 53.6562 98.8125 51.1562 100.531 47.9531C107.016 36.3125 117.094 23.7343 121.937 21.3906C125.219 19.75 127.484 19.75 130.922 21.3906Z"
                    />
                  </svg>
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
                                  ? "bg-gray-50 text-indigo-600 dark:text-gray-800 dark:bg-gray-200"
                                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-50 dark:hover:text-gray-300 dark:hover:bg-gray-700",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className={cn(
                                  item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
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
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 hover:bg-gray-50 hover:text-indigo-600 dark:hover:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Cog6ToothIcon
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
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
