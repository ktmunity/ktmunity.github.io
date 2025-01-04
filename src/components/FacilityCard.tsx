import { LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FacilityCard({ icon: Icon, title, description }: FacilityCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}