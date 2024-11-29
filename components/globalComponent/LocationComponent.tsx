/* eslint-disable @typescript-eslint/no-unused-vars */
import  React from "react";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select";
import { locations } from "@/utils/data/productFilterData";



const LocationComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string | null>(
    null
  );

  return (
    <Select onValueChange={(value) => setSelectedLanguage(value)}>
      <SelectTrigger className="text-white  focus:outline-none focus:ring-0  w-32 ">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>choose location</SelectLabel>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>{location} </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LocationComponent;
