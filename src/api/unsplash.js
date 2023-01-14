import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID egHGsDI7juzZWZp7lcIrfaMpfHKe_9PRsef8Lx5VsGo",
      }
})