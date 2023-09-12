import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "newTomodachi",
        description:"新しい友達",
        stack: ["Discord Bot", "Python", "janome"],
        link: "https://github.com/mizu-orient/newTomodachi",
        largeImage: "liberty-lg.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
