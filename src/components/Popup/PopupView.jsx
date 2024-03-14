const PopupView = ({ user, close, userPosts }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-[600px] bg-gray-800 p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h4>
            <span className="font-bold text-yellow-500">{user}</span> User's
            posts
          </h4>
          <button className="bg-gray-900 p-2 rounded-md " onClick={close}>
            Close
          </button>
        </div>

        {userPosts?.length === 0 ? (
          <p>Loading</p>
        ) : (
          userPosts?.map((post) => (
            <div className="bg-black p-3 rounded-md my-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
