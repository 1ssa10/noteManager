import CategoriesList from "@/components/CategoriesList";
import NotesList from "@/components/NotesList";
import Seacrh from "@/components/Search";

export default function Home() {
  return (
    <>
      <CategoriesList categories={["cat 1", "cat 2", "cat 3", "cat 4"]} />
      <NotesList />
    </>
  );
}
