import { Label } from "./Label";
import { Input } from "./Input";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> e239d19c455d31ced2865a616efd12d1b5e4bbd3

export function InputGroup({
  id,
  type = "text",
  label = "",
<<<<<<< HEAD
  value = "",
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
  onChange
}) {
  
=======
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
  value = "",
  onChange,
}) {
>>>>>>> e239d19c455d31ced2865a616efd12d1b5e4bbd3
  return (
    <div className="mb-4">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
