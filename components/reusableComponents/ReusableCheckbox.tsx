'use client'
import React from "react";
import { Checkbox } from "../ui/checkbox"; // The Radix UI Checkbox
import { Label } from "../ui/label";

// Define prop types for the reusable checkbox component
interface ReusableCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const ReusableCheckbox: React.FC<ReusableCheckboxProps> = ({
  id,
  name,
  checked,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        value={name}
      />
      <Label htmlFor={id}>{name}</Label>
    </div>
  );
};

export default ReusableCheckbox;
