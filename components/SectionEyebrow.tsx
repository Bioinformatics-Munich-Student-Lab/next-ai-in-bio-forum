interface SectionEyebrowProps {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4">
      § {number} — {label}
    </p>
  );
}
