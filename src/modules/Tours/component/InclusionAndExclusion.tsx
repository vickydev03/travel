import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

interface types {
  inclusion?: string;
  exclusion?: string;
  tripId?: number;
}

function InclusionAndExclusion({ inclusion: initialInclusion, exclusion: initialExclusion, tripId }: types) {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery({
    ...trpc.tours.getTrip.queryOptions({ tripId: tripId as number }),
    initialData: initialInclusion ? { inclusion: initialInclusion, exclusion: initialExclusion } as any : undefined,
  });

  const inclusion = data?.inclusion || initialInclusion || "";
  const exclusion = data?.exclusion || initialExclusion || "";
  return (
    <div className="w-full px-5 md:px-0 md:pl-20">
      <div className="flex flex-col gap-5 ">
        <div className="headera">
          <h3 className="font-saira text-2xl md:text-3xl font-medium">
            What’s in the Package?
          </h3>
        </div>
        <div className="inclusion_exclusion hidden grid-cols-2 gap-16 md:grid">
          <div>
            <span className="mb-11 flex items-center justify-start gap-2 text-xl font-medium">
              Included
            </span>
            <div
              className="article acc-content text-xs md:text-[16px] px-4 md:px-6"
              dangerouslySetInnerHTML={{ __html: inclusion }}
            />
          </div>
          <div>
            <span className="mb-11 flex items-center justify-start gap-2 text-xl font-medium">
              Excluded
            </span>
            <div
              className="article acc-content text-xs md:text-[16px] px-4 md:px-6"
              dangerouslySetInnerHTML={{ __html: exclusion }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InclusionAndExclusion;
