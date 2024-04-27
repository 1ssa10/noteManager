export const fetchNotes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    const data = await response.json();
    return data.notes;
  } catch (error) {
    console.log("faild to load", error);
  }
};

export const fetchFilteredNotes = async (category: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/filterednotes/${category}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to filtered notes");
    }

    const data = await response.json();

    return data.notes;
  } catch (error) {
    console.error("Failed to load notes:", error);
  }
};

export const fetchExistNotes = async (category: string, title: string) => {
  const url = `http://localhost:3000/api/findExist?category=${category}&title=${title}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to filtered notes");
    }

    const data = await response.json();

    return data.notes;
  } catch (error) {
    console.error("Failed to load notes:", error);
  }
};

export const createNewNote = async (
  title: string,
  content: string,
  category: string
) => {
  const response = await fetch("http://localhost:3000/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, category }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Note created:", data.message);
    fetchNotes();
  } else {
    console.error("Error creating note:", response.statusText);
  }
};

export const deletNote = async (category: string, title: string) => {
  const url = `http://localhost:3000/api/deleteNote?category=${category}&title=${title}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
  } catch (error) {
    console.error("Failed to delete:", error);
  }
};

export const deletCategory = async (category: string) => {
  const url = `http://localhost:3000/api/deleteCat?category=${category}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
  } catch (error) {
    console.error("Failed to delete:", error);
  }
};

export async function editNote(
  category: string,
  title: string,
  newTitle: string,
  newContent: string
) {
  const url = `http://localhost:3000/api/updateNote?category=${category}&title=${title}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, content: newContent }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.message;
  } else {
    const message = "Note not Found";
    return message;
  }
}
export async function editCat(
  category: string,

  newCategory: string
) {
  const url = `http://localhost:3000/api/findCat?category=${category}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: newCategory }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.message;
  } else {
    const message = "Note not Found";
    return message;
  }
}

export const fetchExistCat = async (category: string) => {
  const url = `http://localhost:3000/api/findCat?category=${category}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to filtered notes");
    }

    const data = await response.json();

    return data.notes;
  } catch (error) {
    console.error("Failed to load notes:", error);
  }
};
