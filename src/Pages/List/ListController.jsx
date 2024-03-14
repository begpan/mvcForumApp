import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./listModel";

const ListController = () => {
  // stateler
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // classtan bir örnek oluşturduk
  const model = new ListModel();
  // usefeferct ile kullanıcı etkişeşimi izlediğimizden conrtroller dosyasında tanımarız

  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      setSelectedUser={setSelectedUser}
      selectedUser={selectedUser}
      posts={posts}
    />
  );
};

export default ListController;
