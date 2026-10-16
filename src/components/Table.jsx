import "./Table.css";

/**
 * Reusable Table
 * @param {string[]} columns  - column headers; each must match a key in the row objects
 * @param {object[]} data     - array of row objects
 * @param {boolean}  striped  - optional, enables striped rows
 */
function Table({ columns, data, striped = false }) {
  return (
    <div className="table-wrap">
      <table className={`table ${striped ? "table-striped" : ""}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
