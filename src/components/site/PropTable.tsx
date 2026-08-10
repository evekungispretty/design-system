export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropTable({ props }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-default">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border-default bg-bg-surface text-left">
            <th className="px-4 py-2 font-medium text-text-primary">Prop</th>
            <th className="px-4 py-2 font-medium text-text-primary">Type</th>
            <th className="px-4 py-2 font-medium text-text-primary">Default</th>
            <th className="px-4 py-2 font-medium text-text-primary">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border-default last:border-0">
              <td className="px-4 py-2 font-mono text-xs text-action-primary">
                {prop.name}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-text-secondary">
                {prop.type}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-text-secondary">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-2 text-text-secondary">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
