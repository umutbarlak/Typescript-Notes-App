import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addNote } from "../slice/noteSlice";
import ReactSelect from "react-select";
import { noteOptions } from "../constants";
import { AppDispatch } from "../store";
import { NoteData } from "../types";

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());

    const noteData: NoteData = {
      category: formData.category as string,
      createdAt: formData.createdAt as string,
      desc: formData.desc as string,
      id: v4(),
      isDone: false,
      title: formData.title as string,
    };

    dispatch(addNote(noteData));

    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full md:w-[500px] flex flex-col gap-3  mt-1"
    >
      <h2 className=" text-2xl font-bold mb-2">Note Ekle</h2>
      <div className=" flex flex-col gap-1">
        <label htmlFor="">Başlık</label>
        <input
          required
          name="title"
          placeholder="örn:Toplantı"
          className="text-black px-2 py-1  rounded-lg outline-none shadow"
          type="text"
        />
      </div>
      <div className=" flex flex-col gap-1">
        <label htmlFor="">Başlık</label>
        <textarea
          required
          name="desc"
          className={`text-black px-2 py-1 rounded-lg outline-none shadow min-h-20 max-h-[200px]`}
          placeholder="Açıklama giriniz..."
        />
      </div>
      <div className=" flex flex-col gap-1">
        <label htmlFor="">Başlık</label>
        <input
          required
          name="createdAt"
          className="text-black px-2 py-1 rounded-lg outline-none shadow"
          type="date"
        />
      </div>
      <div className=" flex flex-col gap-1 ">
        <label htmlFor="">Başlık</label>
        <ReactSelect
          required
          name="category"
          className="text-black"
          options={noteOptions}
        />
      </div>

      <button
        type="submit"
        className=" w-full px-20px py-2 bg-blue-500 rounded-full hover:bg-blue-600"
      >
        Kaydet
      </button>
    </form>
  );
};

export default Form;
