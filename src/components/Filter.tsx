'use client';

import React, { useState } from 'react';
import { LuFilter } from 'react-icons/lu';

import { filters } from '@/data/content';
import Button from '@/shared/Button/Button';
import Select from '@/shared/Select/Select';

const Filter = ({ onFilter }: { onFilter: (filters: string[]) => void }) => {
  const defaultSelected = filters.map((f) => f[0]);
  const [selected, setSelected] =
    useState<(string | undefined)[]>(defaultSelected);

  const handleChange = (value: string, idx: number) => {
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
  };

  const handleFilterClick = () => {
    onFilter(selected.filter((v): v is string => v !== undefined));
  };

  const handleClear = () => {
    setSelected(defaultSelected);
    onFilter(defaultSelected.filter((v): v is string => v !== undefined));
  };

  const isFiltered = selected.some((v, idx) => v !== defaultSelected[idx]);

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
      <div className="flex items-center gap-2">
        <Button
          className="flex items-center gap-1 rounded-full bg-gray px-6 py-2"
          onClick={handleFilterClick}
        >
          Filtrar
          <LuFilter />
        </Button>
        {isFiltered && (
          <Button
            className="flex items-center gap-1 rounded-full bg-neutral-200 px-6 py-2 text-neutral-500"
            onClick={handleClear}
          >
            Borrar
            <LuFilter />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Filter;
