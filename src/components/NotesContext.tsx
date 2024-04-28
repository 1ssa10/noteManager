"use client";
import { fetchFilteredNotes, fetchNotes } from "@/backend/GetNodes";

import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
}

interface ContextInterface {
  notes: Note[];
  loading: boolean;
  cat: string;
  setCat: Dispatch<SetStateAction<string>>;
  cats: string[];
  setCats: Dispatch<SetStateAction<string[]>>;
  factor: number;
  setFactor: Dispatch<SetStateAction<number>>;
}
const NotesContext = createContext<ContextInterface>({
  notes: [],
  loading: false,
  cat: "",
  setCat: () => {},
  cats: [],
  setCats: () => {},
  factor: 1,
  setFactor: () => {},
});

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [factor, setFactor] = useState(1);

  let uniqueCategories: string[] = [];

  //initial fetch
  useEffect(() => {
    const fetchingNodes = async () => {
      setLoading(true);
      const data = await fetchNotes();
      data?.filter(
        (item: Note) => {
          if (!uniqueCategories.includes(item.category)) {
            uniqueCategories.push(item.category);
          }

          setCats(uniqueCategories);
        },
        [factor]
      );
      if (data?.length > 0) {
        setNotes(data);
      }

      setCat("");
      setLoading(false);
    };
    fetchingNodes();
  }, [factor]);

  //filter fetch
  useEffect(() => {
    const fetchingNodes = async () => {
      if (!cat) {
        const data = await fetchNotes();
        setNotes(data);
      } else {
        const data = await fetchFilteredNotes(cat);
        setNotes(data);
      }
    };
    fetchingNodes();
  }, [cat]);
  return (
    <NotesContext.Provider
      value={{ notes, loading, cat, setCat, cats, setCats, factor, setFactor }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
