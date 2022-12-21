import React, { useState } from 'react';

interface Row {
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  description: string;
}

interface Props {
  data: Row[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (rowIndex: number) => {
    if (expandedRows.includes(rowIndex)) {
      setExpandedRows(expandedRows.filter((i) => i !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <React.Fragment key={row.name}>
            <tr>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>
                <button className="toggle-button" onClick={() => toggleRow(index)}>
                  {expandedRows.includes(index) ? 'Collapse' : 'Expand'}
                </button>
              </td>
            </tr>
            {expandedRows.includes(index) && (
              <tr>
                <td colSpan={4}>{row.description}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
