import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

import * as C from "./styles";

export interface DropdownProps {
  label?: string;
  value?: string;
  placeholder: string;
  options: string[];
  error?: string;
  onSelect: (value: string) => void;
}

export const Dropdown = ({
  label,
  value,
  placeholder,
  options,
  error,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectText = isOpen
    ? placeholder
    : !!value && value.length > 0
    ? value
    : placeholder;

  return (
    <C.Container>
      <C.SelectWrapper isFocus={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label && value && <C.Label isFocus={isOpen}>{label}</C.Label>}
        <C.SelectText>
          {isOpen || !value ? (
            <p id="placeholder">{placeholder}</p>
          ) : (
            <p>{selectText}</p>
          )}
        </C.SelectText>
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </C.SelectWrapper>
      {error && <C.TextError>{error}</C.TextError>}
      {isOpen && (
        <C.OptionsWrapper>
          {options.map((option) => (
            <C.Option
              key={option}
              onClick={() => {
                setIsOpen(false);
                onSelect(option);
              }}
            >
              <p>{option}</p>
            </C.Option>
          ))}
        </C.OptionsWrapper>
      )}
    </C.Container>
  );
};
