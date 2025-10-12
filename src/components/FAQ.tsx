import Title from './Title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is there an application fee?',
      answer:
        'Yes. A $45 application fee covers background and credit checks and is non-refundable.',
    },
    {
      question: 'How soon can I move in?',
      answer:
        'Availability varies, but many units are ready within 1-2 weeks of approval.',
    },
    {
      question: 'Are pets allowed?',
      answer:
        "Absolutely. We're pet-friendly—with certain breed and weight restrictions. Pet deposits apply.",
    },
    {
      question: 'What utilities are included?',
      answer:
        'Water, gas, and trash are included. Electricity, internet, and optional upgrades are paid separately.',
    },
    {
      question: 'Do I need renters insurance?',
      answer:
        'Yes, proof of renters insurance is required prior to move-in for your protection.',
    },
    {
      question: 'How long is the lease?',
      answer:
        'We offer flexible lease terms—typically 12 months—with options to renew or extend.',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-5 ">
      <div className="space-y-3 flex-1">
        <Title as="h2" size="md" className="capitalize">
          everything you need to know upfront
        </Title>
        <p>
          From setup to support and pricing, here are quick answers to the most
          comon questions we get from teams.
        </p>
      </div>

      <div className="flex-1">
        {faqs.map((faq, i) => (
          <Accordion
            key={faq.question}
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value={`${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
