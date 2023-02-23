export default function SubscribeForm() {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border-2 border-dashed border-pink-700 bg-white/80 p-4 pl-10 text-sm text-gray-900 focus:border-primary focus:bg-white focus:ring-primary"
          placeholder="email@example.com"
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800 md:px-6"
        >
          {"S'abonner"}
        </button>
      </div>
    </form>
  );
}
