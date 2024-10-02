import Avatar from "./Avatar";

export type PostProps = {
  title: string;
  content: string;
  id: number;
};

export default function Post({ title, content }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-lg">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <Avatar />
        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-900">{"author"}</h2>
          <h3 className="text-sm text-gray-400">{title}</h3>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <p className="text-gray-700 mb-4">{content}</p>
      </div>

      {/* Comment Box */}
      <div className="flex items-center border-t border-gray-200 pt-4">
        <div className="flex-shrink-0">
          <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">
            AW
          </div>
        </div>
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
    </div>
  );
}
