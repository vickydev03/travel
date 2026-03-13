import { getPricing } from "@/trpc/type";
import React from "react";

function Costing({ costs }: { costs: getPricing }) {
  return (
    <div className="w-full  px-5 md:px-0 md:pl-20">
      <div className="flex flex-col gap-5">
        <div className="headera">
          <h3 className="font-saira text-2xl md:text-3xl font-medium">
            Costing
          </h3>
        </div>

        <div className="w-full border ">
          <table className="min-w-full border-separate border-spacing-0 text-xs md:text-base">
            <thead className="text-xl">
              <tr className="bg-white">
                <th className="border p-4 text-center first:rounded-tl-xl last:rounded-tr-xl">
                  Mode
                </th>
                <th className="border p-4 text-center first:rounded-tr-xl last:rounded-tr-xl">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {costs.map((e) => (
                <tr
                  key={e.id}
                  className="bg-white text-sm text-[#5A5A5A] md:text-base last:rounded-bl-xl last:rounded-br-xl"
                >
                  <td className="border p-4 text-center rounded-bl-xl capitalize">
                    {e.sharing.toWellFormed()} Sharing
                  </td>
                  <td className="min-w-40 border p-4 text-center rounded-br-xl">
                    <span className="inline-flex items-center gap-2 text-[#5A5A5A]">
                      <span className="font-[aktivGrotesk] text-sm md:text-base">
                        ₹ {e.price}
                      </span>
                      <span className="text-xs line-through decoration-[#F61b00] decoration-[1.5px] md:text-sm md:decoration-[2.29px]">
                        ₹ {(e.price * 1.3).toFixed()}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Costing;
