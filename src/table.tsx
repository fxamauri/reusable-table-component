type TPropsValue = { id: string } & { [key: string]: string | number };

type Column<T> = {
  id: keyof T;
  label: string;
};

type TableProps<T extends TPropsValue> = {
  columns: Column<T>[];
  data: T[];
};

function Table<T extends TPropsValue>({ columns, data }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.id)}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={String(column.id)}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}