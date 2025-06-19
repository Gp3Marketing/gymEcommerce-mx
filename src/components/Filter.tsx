"use client";

import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { filters } from "@/data/content";
import Button from "@/shared/Button/Button";
import Select from "@/shared/Select/Select";

const Filter = ({ onFilter }: { onFilter: (filters: string[]) => void }) => {
  const [selected, setSelected] = useState(filters.map((f) => f[0]));

  const handleChange = (value: string, idx: number) => {
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
  };

  const handleFilterClick = () => {
    onFilter(selected.filter((v): v is string => typeof v === 'string'));
  };

  return (
    <div className="mx-auto mb-10 max-w-4xl items-center justify-between space-y-3 rounded-2xl border border-neutral-300 p-2 md:flex md:space-y-0 md:rounded-full">
      <div className="grid basis-3/4 gap-3 md:grid-cols-4">
        {filters.map((filter, idx) => (
          <Select
            sizeClass="h-12"
            key={filter[0]}
            value={selected[idx]}
            onChange={(e) => handleChange(e.target.value, idx)}
          >
            {filter.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        ))}
      </div>
      <div className="hidden h-5 w-px bg-neutral-300 md:block" />
      <Button
        className="flex w-full items-center gap-1 bg-gray lg:w-auto"
        onClick={handleFilterClick}
      >
        Filtrar
        <LuFilter />
      </Button>
    </div>
  );
};

export default Filter;