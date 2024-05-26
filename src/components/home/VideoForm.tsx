import { useState } from "react";

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Video URL
          </label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="py-3 ">You can use this video link:  https://cdn.pixabay.com/video/2024/05/25/213606_tiny.mp4</div>
      {submitted && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="mt-2 text-gray-700">{description}</p>
          <video src={videoUrl} autoPlay controls className="mt-4 w-full" />
        </div>
      )}
    </div>
  );
};

export default VideoForm;
