import { useNavigate } from "react-router-dom";
import CreateModel from "./CreateModel";
import CreateView from "./CreateView";
import { v4 } from "uuid";

const CreateController = () => {
  // modelden bir örnek olusturm

  const model = new CreateModel();

  const navigate = useNavigate();

  // form gonderilince calısacak  fonk tanımla
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1)inputlardaki verileri alıp bir post nesnesi olustu
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2) post nesnesine id degeri ekle
    newPost.id = v4();

    // 3) apiye veriyi kaydet ve anasayfaya yonlednrşd
    model.createPost(newPost).then(() => navigate("/"));
  };

  // CONTROLLER SADECE VİEW BİLEŞENİNİ DÖNDÜRÜR
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
