import { useDispatch, useSelector } from "react-redux";
import FilterNotes from "./FilterNotes";
import { AppDispatch, RootState } from "../store";
import { deleteNote, setFilteredNotes, updateDone } from "../slice/noteSlice";
import { colorMap, noteOptions } from "../constants";
import { useEffect, useState } from "react";
import { SelectOption } from "../types";

const ListNotes = () => {
  const { notesData, notes } = useSelector((store: RootState) => store.note);
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>();
  const [cat, setCat] = useState<SelectOption | undefined | null>();

  const optionsLabel = (value: string) => {
    const option = noteOptions.find((opt) => opt.value === value);

    return option?.label;
  };

  const handleReset = () => {
    setTitle("");
    setCat({ value: "", label: "Seçiniz" });
    dispatch(setFilteredNotes(notes));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let filtered = notes;

    console.log(title);
    console.log(cat);

    if (title) {
      filtered = filtered.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (cat && cat.value !== "") {
      filtered = filtered.filter((note) => note.category === cat.value);
    }

    dispatch(setFilteredNotes(filtered));
  };

  console.log(notesData);

  return (
    <>
      <div className=" w-full px-2 overflow-hidden ">
        <FilterNotes
          cat={cat}
          title={title}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          setCat={setCat}
          setTitle={setTitle}
        />

        {notesData.length === 0 ? (
          <div className="text-center text-xl">
            Aradığınınız kriterlere uygun note bulunamadı.
          </div>
        ) : (
          <div className=" grid sm:grid-cols-2 gap-5 overflow-y-auto over">
            {notesData.map((note) => (
              <div
                key={note.id}
                className=" h-[200px] flex flex-col bg-[#e2dfde] p-5 rounded-lg text-black  justify-between"
              >
                <div className="flex justify-between items-center">
                  <h2 className=" text-2xl">{note.title}</h2>
                  <span>{note.createdAt}</span>
                </div>
                <p className=" line-clamp-2">{note.desc}</p>
                <div className="text-white flex justify-between items-center">
                  <span
                    className="py-1 px-2 rounded-lg"
                    style={{ background: colorMap[note.category] }}
                  >
                    {optionsLabel(note.category)}
                  </span>
                  <div className=" t flex gap-2">
                    <button
                      onClick={() => dispatch(deleteNote(note.id))}
                      className={`px-2 py-1 rounded-md hover:brightness-75
                   bg-red-600 `}
                    >
                      Sil
                    </button>
                    <button
                      className={`px-2 py-1 rounded-md hover:brightness-75
                   bg-blue-600 `}
                    >
                      Detay
                    </button>

                    <button
                      onClick={() => dispatch(updateDone(note))}
                      className={`px-2 py-1 w-[120px] rounded-md hover:brightness-75 ${
                        note.isDone ? "bg-green-500" : "bg-pink-500"
                      } `}
                    >
                      {note.isDone ? "Tamamlandı" : "Tamamla"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListNotes;
