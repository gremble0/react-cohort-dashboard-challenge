import Avatar from "../../common/Avatar";

export default function CreateComment() {
  return (
    <div className="flex items-center border-t border-gray-200 pt-4">
      <Avatar imgSrc="" />

      <div className="ml-4 w-full">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-gray-100 p-2 rounded-lg outline-none"
        />
      </div>

      <button className="ml-2 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.752 11.168l-9.456 5.672A1 1 0 014 15.985V7.985a1 1 0 011.296-.956l9.456 5.672a1 1 0 010 1.672z"
          />
        </svg>
      </button>
    </div>
  );
}
