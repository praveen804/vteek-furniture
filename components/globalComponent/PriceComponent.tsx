/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
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
import React from "react";

const countryData = [
  {
    name: "India",
    value: "india",
    flag: "https://flagcdn.com/in.svg",
    currency: "INR",
  },
  {
    name: "USA",
    value: "usa",
    flag: "https://flagcdn.com/us.svg",
    currency: "USD",
  },
  {
    name: "England",
    value: "england",
    flag: "https://flagcdn.com/gb.svg",
    currency: "GBP",
  },
  {
    name: "UAE",
    value: "uae",
    flag: "https://flagcdn.com/ae.svg",
    currency: "AED",
  },
  {
    name: "China",
    value: "china",
    flag: "https://flagcdn.com/cn.svg",
    currency: "CNY",
  },
];

const PriceComponent = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(
    null
  );

  return (
    <Select onValueChange={(value) => setSelectedCountry(value)}>
      <SelectTrigger className="  text-white   focus:outline-none focus:ring-0 w-[145px] ">
        <SelectValue placeholder="currency" className="text-white" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          <SelectLabel>Countries</SelectLabel>
          {countryData.map((country) => (
            <SelectItem key={country.value} value={country.value} defaultValue={"india"}>
              <div className="flex items-center gap-2">
                <Image
                  width={12}
                  height={12}
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-4 h-4 rounded-sm"
                  sizes="16px"
                />
                <span className="flex items-center gap-1">
                  {country.name}{" "}
                  <span className=""> - {country.currency}</span>
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceComponent;
