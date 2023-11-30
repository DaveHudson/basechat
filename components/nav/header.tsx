import UserProfile from "@/components/nav/user-profile";
import Search from "@/components/nav/search";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 lg:hidden" aria-hidden="true" />
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <Search />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
