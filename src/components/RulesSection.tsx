import { CheckCircle2 } from 'lucide-react';

const rules = [
  "Maintain silence during study hours (7 PM - 10 PM)",
  "No visitors allowed in rooms without permission",
  "Keep rooms and common areas clean",
  "No smoking or alcohol consumption on premises",
  "Inform warden before leaving for overnight stay",
  "Meals will be served at fixed timings only",
  "Conserve electricity and water",
  "Report any maintenance issues immediately",
  "Follow laundry schedule strictly",
  "Respect other residents and staff members"
];

export default function RulesSection() {
  return (
    <section id="rules" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Hostel Rules</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-blue-600" />
                <span className="text-gray-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}