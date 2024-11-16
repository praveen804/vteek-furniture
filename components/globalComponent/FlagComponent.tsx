/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const countryData = [
  { name: "India", value: "india", flag: "https://flagcdn.com/in.svg" },
  { name: "USA", value: "usa", flag: "https://flagcdn.com/us.svg" },
  { name: "England", value: "england", flag: "https://flagcdn.com/gb.svg" },
  { name: "UAE", value: "uae", flag: "https://flagcdn.com/ae.svg" },
  { name: "China", value: "china", flag: "https://flagcdn.com/cn.svg" },
];

const FlagComponent = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(
    null
  );

  return (
    <Select onValueChange={(value) => setSelectedCountry(value)}>
      <SelectTrigger className="w-[100px] text-white border-none  focus:outline-none focus:ring-0   ">
        <SelectValue placeholder="country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {countryData.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              <div className="flex items-center gap-2">
                <Image
                  width={20}
                  height={20}
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-5 h-5 rounded-sm"
                />
                {country.name}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FlagComponent;
