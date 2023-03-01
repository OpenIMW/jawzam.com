import { isValidRequest } from "@sanity/webhook"
import { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.SANITY_WEBHOOK_SECRET!

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  // Validate request method
  if (req.method !== 'POST') {
    return res.status(401).json({ message: "Must be a POST request" })
  }

  // Validate signature
  if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: "Invalid signature" })
  }

  try {
    const {
      body: { type, slug },
    } = req

    switch (type) {
      case "homePage":
        await res.revalidate(`${slug}`)
        return res.json({
          message: `Revalidated "${type}" with slug "${slug}"`
        });

      default:
        return res.json({ message: "No managed type" })
    }

  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" })
  }
}
