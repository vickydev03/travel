import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { faqType } from "@/trpc/type";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection({ faq: initialFaq, tourId }: { faq?: faqType; tourId?: number }) {
  const trpc = useTRPC();

  const { data: faq } = useSuspenseQuery({
    ...trpc.tours.getFaq.queryOptions({ tourId: tourId as number }),
    initialData: initialFaq,
  });
  if (!faq || faq.length === 0) return null;
  
  return (
    <section className="px-5 md:px-20 py-12 md:py-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Clear answers to help you plan your trip better
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="divide-y divide-gray-200"
        >
          {faq.map((e) => (
            <AccordionItem
              key={e.id}
              value={`item-${e.id}`}
              className="border-none"
            >
              <AccordionTrigger className="py-6 text-left text-gray-900 font-medium hover:no-underline hover:text-gray-700 transition-colors">
                {e.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {e.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
