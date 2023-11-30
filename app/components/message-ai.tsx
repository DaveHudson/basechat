import { SunIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils/css";

export default function MessageAI({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex flex-row px-4 py-1">
        <span
          className={classNames(
            "bg-yellow-500 h-6 w-6 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900"
          )}
        >
          <SunIcon className="h-4 w-4 text-white" aria-hidden="true" />
        </span>
      </div>

      <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">
        <p className="max-w-3xl">{children}</p>
        <div className="mt-4 flex flex-row justify-start gap-x-2 text-slate-500 lg:mt-0">
          <button className="hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
            </svg>
          </button>
          <button
            className="hover:text-blue-600"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(`${children}`).then(
                function () {
                  console.log("Copying to clipboard was successful!");
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
