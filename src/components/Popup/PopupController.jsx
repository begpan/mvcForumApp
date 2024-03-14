import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  const [userPosts, setUserPosts] = useState(null);

  // modelden bir örnek oluştur
  const model = new PopupModel();

  // pencere acıldıgında kullanıcıını gonderilerini alır
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);
  return <PopupView userPosts={userPosts} user={user} close={close} />;
};

export default PopupController;
