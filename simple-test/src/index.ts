import { ResponseBuilder } from "@fermyon/spin-sdk";

export async function handler(_req: Request, res: ResponseBuilder) {
    res.send("hello universe");
}
