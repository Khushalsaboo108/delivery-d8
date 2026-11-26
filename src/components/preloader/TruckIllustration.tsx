export interface TruckIllustrationProps {
  isDriving: boolean;
  className?: string;
}

export default function TruckIllustration({ className }: TruckIllustrationProps) {
  return (
    <img
      src="/truck-illustration.png"
      alt="Shree Balaji Enterprises delivery truck"
      className={className}
      draggable={false}
    />
  );
}
