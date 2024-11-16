/* eslint-disable @typescript-eslint/no-unused-vars */
import  React from "react";
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

const languageData = [
  { name: "English", code: "en", flag: "https://flagcdn.com/us.svg" },
  { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg" },
  { name: "Arabic", code: "ar", flag: "https://flagcdn.com/ae.svg" },
  { name: "Chinese", code: "zh", flag: "https://flagcdn.com/cn.svg" },
  { name: "French", code: "fr", flag: "https://flagcdn.com/fr.svg" },
];


const LanguageSelectorComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string | null>(
    null
  );

  return (
    <Select onValueChange={(value) => setSelectedLanguage(value)}>
      <SelectTrigger className="text-white border-none  focus:outline-none focus:ring-0  w-32 ">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languageData.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center gap-2">
                <Image
                  width={20}
                  height={20}
                  src={language.flag}
                  alt={`${language.name} flag`}
                  className="w-5 h-5 rounded-sm"
                />
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelectorComponent;
