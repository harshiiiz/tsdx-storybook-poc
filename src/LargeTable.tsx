import React from 'react';

interface Props {
  data: { id: number, name: string, department: string }[];
}

const LargeTable: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {data.map(entry => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LargeTable;
