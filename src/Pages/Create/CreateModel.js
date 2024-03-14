import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel {
  async createPost(newPost) {
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      toast.success("Successfully Submitted ");
    } catch (err) {
      toast.error("Something Went Wrong");
      console.log(err);
    }
  }
}
