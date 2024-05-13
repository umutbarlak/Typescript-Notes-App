import ReactSelect from "react-select";
import { noteOptions } from "../constants";
import { SelectOption } from "../types";

interface FilterProps {
  setCat: React.Dispatch<React.SetStateAction<SelectOption | undefined | null>>;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleReset: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  title: string | undefined;
  cat: SelectOption | null | undefined;
}

const FilterNotes = ({
  setCat,
  setTitle,
  handleReset,
  handleSubmit,
  title,
  cat,
}: FilterProps) => {
  return (
    <div className=" my-5 md:my-1 md:mb-5 md:flex justify-between">
      <h2 className=" text-2xl font-bold mb-2">Filtreleme</h2>
      <form
        onSubmit={handleSubmit}
        className=" flex justify-end items-center gap-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" text-black py-2 px-3 rounded-md"
          type="text"
        />

        <ReactSelect
          value={cat}
          onChange={(e) => e && setCat(e)}
          className="min-w-[120px] text-black"
          options={noteOptions}
        ></ReactSelect>

        <button type="submit" className="py-2 px-3 rounded-md bg-blue-600">
          Filtrele
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="py-2 px-3 rounded-md bg-gray-600"
        >
          Sıfırla
        </button>
      </form>
    </div>
  );
};

export default FilterNotes;
