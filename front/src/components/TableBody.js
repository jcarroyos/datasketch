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
                          <a target="_self" href={'/profile/' + data.id}>
                            <img className="avatar" alt={data.nickname+"'s avatar"} key={accessor} src={tData}/>
                          </a>
                        </figure>
                    </td>
                );
              }
              return <td key={accessor}>
                  <a target="_self" href={'/profile/' + data.id}>
                    {tData}
                  </a>
                </td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
