import { Request, Response } from "express";
import inMemoryVoicingStore, { Voicing } from "../inMemoryVoicingStore";

export default function addVoicing(
  request: Request,
  response: Response
): Response<Voicing[]> {
  const voicing = request.body;
  inMemoryVoicingStore.push(voicing);
  return response.send(voicing);
}
