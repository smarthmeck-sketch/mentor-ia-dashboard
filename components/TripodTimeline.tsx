'use client';

interface Step {
  label: string;
  desc: string;
  icon: string;
}

interface TripodTimelineProps {
  steps: Step[];
}

export default function TripodTimeline({ steps }: TripodTimelineProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6">
      <h2 className="text-sm font-medium mb-4">Trilha da sessão atual</h2>
      <ol className="space-y-4">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <span className="text-lg">{step.icon}</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Passo {idx + 1} • {step.label}
              </p>
              <p className="text-sm">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
