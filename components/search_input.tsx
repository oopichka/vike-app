import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "~/components/ui/input";
import { useDebounce } from "~/hooks/useDebounce";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const SearchInput = () => {
  const [open, setopen] = useState(false);
  const [searchWidth, setSearchWidth] = useState<number>(500);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchQuery = useDebounce<string>(searchValue, 300);
  const searchRef = useRef<HTMLInputElement>(null);

  const onResize = useCallback(() => {
    if (searchRef.current) {
      setSearchWidth(searchRef.current?.clientWidth ?? 500);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    //console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <HoverCard open={open && searchQuery != ""}>
        <HoverCardTrigger asChild>
          <Input
            type="text"
            placeholder="Search"
            className="w-52 xs:w-60 sm:w-[400px] lg:w-[450px] xl:w-[750px]"
            ref={searchRef}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => {
              setopen(true);
            }}
            onBlur={() => setopen(false)}
          />
        </HoverCardTrigger>
        <HoverCardContent className="w-52 xs:w-60 sm:w-[400px] lg:w-[450px] xl:w-[750px]">
          <div className="flex justify-between space-x-4">{searchQuery}</div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
