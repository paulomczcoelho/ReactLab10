
const URL =
  "https://gist.githubusercontent.com/andasan/4f4976c373654f73b0a465a2441c2c91/raw/1b3c99936426b59ba4a92c7afe12fc109e4dbdcd/moods.json";

import { createSlice } from "@reduxjs/toolkit";

export const MOODS = {
  SAD: "sad",
  HAPPY: "happy",
  SHOCKED: "shocked",
  BLISSFUL: "blissful",
  EXCITED: "excited",
  KO: "ko",
  LOVESTRUCK: "lovestruck",
};

export const catSlice = createSlice({
  name: "mood",
  initialState: {
    mood: MOODS.HAPPY,
    color: "#ffff",
    size: 300,
  },
  reducers: {
    updateCatMood: (state, action) => ({ ...state, mood: action.payload }),
    updateCatColor: (state, action) => ({ ...state, color: action.payload}),
    updateCatSizeInc: (state) => ({ ...state, size: state.size + 5 }),
    updateCatSizeDic: (state) => ({ ...state, size: state.size - 5 }),
  },
});

export const {
  updateCatColor,
  updateCatMood,
  updateCatSizeDic,
  updateCatSizeInc,
} = catSlice.actions;

export default catSlice.reducer;
