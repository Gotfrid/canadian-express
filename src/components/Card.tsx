interface Props {
  gridArea: string;
  title: string | null;
  children: React.ReactNode;
}

export const Card = ({ gridArea, title, children }: Props) => {
  return (
    <div className="card card-bordered shadow-sm p-2 rounded-md border-1 dark:border-gray-600" style={{ gridArea }}>
      <h3 className="text-sm sm:text-xl font-semibold card-title mb-1">{title}</h3>
      {children}
    </div>
  );
};
