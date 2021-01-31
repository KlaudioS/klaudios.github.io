import react, { Component } from "react";

const TableHeader = (props) => {
  console.log(props.characterData);
  if (props.characterData.length != 0) {
    return (
      <thead>
        <h1>Table made with simple components</h1>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  }
  return <h1>No data please fill the form</h1>;
};

const TableBody = (props) => {
  if (props.characterData) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }
  return <tbody>{}</tbody>;
};

const TableProps = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader characterData={characterData} />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default TableProps;
