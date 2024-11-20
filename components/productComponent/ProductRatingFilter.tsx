"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";

export default function ProductFilterRating() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<
    Record<string, boolean>
  >({
    all: false,
    "5-stars": false,
    "4-stars": false,
    "3-stars": false,
    "2-stars": false,
    "1-star": false,
  });

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div className="space-y-4">

      {/* Checkbox Group for Multiple Selections */}
      <div>
        <h3 className="text-lg font-semibold underline pb-2 ">
          Rating Item
        </h3>
        <div className="space-y-2">
          {["all", "5-stars", "4-stars", "3-stars", "2-stars", "1-star"].map(
            (id, index) => (
              <div className="flex items-center gap-2" key={id}>
                <Checkbox
                  id={`checkbox-${id}`}
                  checked={selectedCheckboxes[id]}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(id, !!checked)
                  }
                />
                <Label htmlFor={`checkbox-${id}`}>
                  {id === "all" ? (
                    "All reviews"
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="inline-flex items-center text-amber-500"
                        aria-hidden="true"
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < parseInt(id[0])
                                ? "text-amber-500"
                                : "opacity-30"
                            }
                          />
                        ))}
                      </span>
                      <span className="sr-only">{`${id[0]} stars`}</span>
                    </span>
                  )}{" "}
                  <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                    ({[12921, 5168, 4726, 3234, 1842, 452][index]})
                  </span>
                </Label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
