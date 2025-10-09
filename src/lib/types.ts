// Link Component
export type LinkComponentProps = {
  url: string;
  imgURL: string;
  text: string;
};

// Bounded
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

// Title
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};
