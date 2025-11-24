"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I split my emails into multiple campaigns?",
    answer: "Yes. You can divide your emails however you want to test different campaigns.",
  },
  {
    question: "Can I use my own email list?",
    answer: "Yes, you can bring your own list. I'll verify it first to make sure the emails are valid and deliverable.",
  },
  {
    question: "Should I use my own domain for sending?",
    answer:
      "Not recommended. I use my own domains and email accounts to protect your brand. This way, if anything goes wrong, your domain reputation stays safe.",
  },
  {
    question: "How quickly will I get responses?",
    answer: "Most campaigns start getting replies within the first hour.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 border-b border-white/10 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-white/5 px-6 mb-4 data-[state=open]:bg-white/10 transition-colors"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
