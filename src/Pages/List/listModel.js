// veril ile alakalı her turlu yapıyı modelde tanımlarız
// model olustururken genelde clasları tercih ederiz.

import axios from "axios";

export default class ListModel {
  // apiden post verilerini alıp donduren bir fonksiyon

  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");

      return res.data;
    } catch (err) {
      alert("üzgünüz bir hata oluştu");
      console.log(err);
    }
  }
}
