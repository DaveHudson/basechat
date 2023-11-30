import { cn } from "@/lib/utils";
import Link from "next/link";
import { Cog6ToothIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import type { NavigationItem } from "@/app/navigation";

export default function NavigationDesktop({ navigation }: { navigation: NavigationItem[] }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200  dark:border-gray-700 px-6 pb-4">
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
                          ? "bg-gray-50 text-sky-600"
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
                <Cog6ToothIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-sky-600" aria-hidden="true" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
