import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "mizu-orient",
        link: "https://github.com/mizu-orient",
      },
      {
        medium: "email",
        username: "Mizu",
        link: "TBD",
      },
      {
        medium: "Zenn",
        username: "いぬお",
        link: "https://zenn.dev/inuo",
      },
      {
        medium: "linkedin",
        username: "TBD",
        link: "TBD",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
