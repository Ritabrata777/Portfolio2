import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# Ritabrata Majumdar

ECE undergraduate at Heritage Institute of Technology, Kolkata.

## Focus
- Blockchain applications
- AI-assisted product experiences
- Embedded systems and IoT
- Fast prototype-driven builds

## Contact
- Email: ritabratamajumdar70@gmail.com
- GitHub: github.com/Ritabrata777
- LinkedIn: linkedin.com/in/ritabrata-majumdar-764b81332`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
