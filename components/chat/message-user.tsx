import { cn } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/20/solid";

export default function MessageUser({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex flex-row px-4 py-1">
        <span
          className={cn(
            "bg-blue-400 h-6 w-6 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900"
          )}
        >
          <UserIcon className="h-4 w-4 text-white" aria-hidden="true" />
        </span>
      </div>
      <div className="flex max-w-3xl items-center">
        <p>{children}</p>
      </div>
    </div>
  );
}
