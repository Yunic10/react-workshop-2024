import { Label } from "./Label";
import { Input } from "./Input";
import { useState } from "react";

export function InputGroup({
  id,
  type = "text",
  label = "",
  value = "",
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
  onChange
}) {
  
  return (
    <div className="mb-4">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value} // Menggunakan id sebagai key untuk nilai
      />
    </div>
  );
}
