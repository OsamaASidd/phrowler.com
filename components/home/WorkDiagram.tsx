import Image from "next/image";
import { CheckIcon } from "@/components/icons";

export type DiagramNode = {
  label: string;
  logo?: string;
};

function Connector({ vertical }: { vertical: boolean }) {
  return (
    <div aria-hidden="true" className="flex items-center justify-center">
      {vertical ? (
        <span className="flow-connector my-3 block h-7" />
      ) : (
        <>
          <span className="flow-connector my-3 block h-7 md:hidden" />
          <span className="flow-connector-h mx-3 hidden md:block" />
        </>
      )}
    </div>
  );
}

/**
 * A labelled system diagram used in place of project screenshots we do not
 * have. Every diagram describes the real architecture of the engagement:
 * sources in, the Phrowler layer, outcomes out.
 */
export default function WorkDiagram({
  caption,
  inputsLabel = "Sources",
  outputsLabel = "Result",
  inputs,
  core,
  outputs,
  orientation = "horizontal",
  className = "",
}: {
  caption: string;
  inputsLabel?: string;
  outputsLabel?: string;
  inputs: DiagramNode[];
  core: string;
  outputs: string[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const vertical = orientation === "vertical";
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-ink text-paper ring-1 ring-white/10 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono-label text-[10px] uppercase text-paper/60">
          {caption}
        </span>
        <span className="flex items-center gap-2 font-mono-label text-[10px] uppercase text-brand-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="bg-grid-dark p-5">
        <div
          className={`flex flex-col gap-0 ${
            vertical ? "" : "md:flex-row md:items-center"
          }`}
        >
          <div className={vertical ? "" : "md:flex-1"}>
            <p className="font-mono-label text-[10px] uppercase text-paper/60">
              {inputsLabel}
            </p>
            <ul
              className={`mt-3 flex flex-wrap gap-1.5 ${
                vertical ? "" : "md:flex-col md:gap-2"
              }`}
            >
              {inputs.map((input) => (
                <li
                  key={input.label}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5"
                >
                  {input.logo ? (
                    <Image
                      src={`/assets/logos/${input.logo}`}
                      alt=""
                      width={36}
                      height={18}
                      className="h-3.5 w-7 shrink-0 rounded-sm bg-paper object-contain p-0.5"
                    />
                  ) : (
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-bright"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-[11px] font-medium text-paper/90">
                    {input.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Connector vertical={vertical} />

          <div className={vertical ? "" : "md:flex-1"}>
            <div className="rounded-lg bg-brand-bright px-3.5 py-3 text-center">
              <p className="font-display text-sm font-semibold leading-tight text-ink">
                {core}
              </p>
            </div>
          </div>

          <Connector vertical={vertical} />

          <div className={vertical ? "" : "md:flex-1"}>
            <p className="font-mono-label text-[10px] uppercase text-paper/60">
              {outputsLabel}
            </p>
            <ul className="mt-3 space-y-2">
              {outputs.map((output) => (
                <li
                  key={output}
                  className="flex items-start gap-2.5 text-[12px] leading-snug text-paper/85"
                >
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-bright" />
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
