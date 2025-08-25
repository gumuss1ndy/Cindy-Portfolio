// components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;