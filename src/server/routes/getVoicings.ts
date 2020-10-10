import { Request, Response } from "express";
import inMemoryVoicingStore, { Voicing } from "../inMemoryVoicingStore";

export default function getVoicings(
  request: Request,
  response: Response
): Response<Voicing[]> {
  return response.send(inMemoryVoicingStore);
}
