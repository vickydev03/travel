import React from "react";

function Notes({ note }: { note: string }) {
  return (
    <div className=" px-5 md:px-0 md:pl-20">
      <div className="flex flex-col gap-4">
        <h3 className="font-saira text-2xl md:text-3xl font-medium">Notes</h3>
        <div className="w-full">
          <div
            className="article font-bold text-xs md:text-[16px] leading-5"
            dangerouslySetInnerHTML={{ __html: note }}
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
