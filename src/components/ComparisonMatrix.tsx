import React from 'react';
import { COMPARISON_FEATURES } from '../data/specs';
import { Check, X, ShieldAlert } from 'lucide-react';

interface ComparisonMatrixProps {
  isLightMode: boolean;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ isLightMode }) => {
  return (
    <section id="comparison" className="py-20 border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
            Architectural Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why Enterprise Intelligence Cannot Live on Shared Multi-Tenants.
          </h2>
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'}`}>
            Evaluating the fundamental differences between streaming data to public API providers,
            relying on managed cloud wrappers, and deploying ClosemindLabs inside your private perimeter.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className={`rounded-lg border overflow-hidden transition-colors ${
            isLightMode ? 'bg-[#ffffff] border-[#e5e7eb]' : 'bg-[#101216] border-[#22252c]'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr
                  className={`border-b font-mono text-xs ${
                    isLightMode
                      ? 'bg-[#f8f9fa] border-[#e5e7eb] text-[#4b5563]'
                      : 'bg-[#14161c] border-[#22252c] text-[#9ca3af]'
                  }`}
                >
                  <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4">Evaluation Vector</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4 opacity-75">
                    Public SaaS APIs
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4 opacity-75">
                    Cloud Studio Wrappers
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold w-1/4 text-emerald-400 bg-emerald-500/5 border-l border-emerald-500/20">
                    ClosemindLabs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#22252c]/60">
                {COMPARISON_FEATURES.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      isLightMode ? 'hover:bg-[#f9fafb]' : 'hover:bg-[#15171d]'
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-medium text-white align-top">
                      {item.dimension}
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-[#9ca3af] align-top text-xs leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{item.publicSaaS}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-[#9ca3af] align-top text-xs leading-relaxed">
                      <div className="flex items-start gap-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item.managedWrapper}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-[#f3f4f6] align-top text-xs leading-relaxed font-medium bg-emerald-500/5 border-l border-emerald-500/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item.closemindLabs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
