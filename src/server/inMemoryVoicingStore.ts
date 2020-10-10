export interface Voicing {
  title: string;
  notes: number[];
}

const inMemoryVoicingStore: Voicing[] = [
  { title: "First voicing", notes: [1, 2, 3] },
  { title: "Second voicing", notes: [4, 5, 6] },
];

export default inMemoryVoicingStore;
