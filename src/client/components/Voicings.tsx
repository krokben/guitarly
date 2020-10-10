import React, { useState, useEffect } from "react";
import { Voicing } from "../../server/inMemoryVoicingStore";

export enum Status {
  idle = "IDLE",
  fetching = "FETCHING",
  success = "SUCCESS",
  error = "ERROR",
}

export default function Voicings() {
  const [status, setStatus] = useState<Status>(Status.idle);
  const [voicings, setVoicings] = useState<Voicing[]>([]);

  useEffect(() => {
    setStatus(Status.fetching);

    fetch("/api/voicings")
      .then((response) => response.json())
      .then((data) => {
        setVoicings(data);
        setStatus(Status.success);
      })
      .catch(() => setStatus(Status.error));
  }, []);

  return status === Status.success ? (
    <ul>
      {voicings.map(({ title, notes }, index) => (
        <li key={`voicing-${title}-${index}`}>
          {title} {notes.map((note) => note)}
        </li>
      ))}
    </ul>
  ) : status === Status.error ? (
    <p>Could not get the voicings from the database.</p>
  ) : (
    <p>Loading...</p>
  );
}
