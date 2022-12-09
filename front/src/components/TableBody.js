const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              let condition = tData.toString().substring().slice(-4);
              if ( condition  === '.jpg' || condition  === '.png' ) {
                return (
                    <td key={accessor}>
                        <figure>
                            <img className="avatar" alt={data.nickname+"'s avatar"} key={accessor} src={tData}/>
                        </figure>
                    </td>
                );
              }
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
