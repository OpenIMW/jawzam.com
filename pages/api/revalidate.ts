import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"
import { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.SANITY_WEBHOOK_SECRET!

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;

  // Validate request method
  if (req.method !== 'POST') {
    return res.status(401).json({ message: "Must be a POST request" })
  }

  const body = await readBody(req) // Read the body into a string
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  // Validate signature
  /* if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: "Invalid signature" })
  } */

  try {
    const { type, slug } = JSON.parse(body)

    switch (type) {
      case "homePage":
        await res.revalidate(`${slug}`)
        res.json({
          message: `Revalidated "${type}" with slug "${slug}"`
        });
        return;

      default:
        res.json({ message: "No managed type" });
        return;
    }

  } catch (err) {
    res.status(500).send({ message: "Error revalidating", payload: body, error: err });
    return;
  }
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
}

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}
