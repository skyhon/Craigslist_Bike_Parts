import React, { Component } from "react";
import styles from "../css/styles.module.css";
import Pagination from "./common/pagination";

class Table extends Component {
  render() {
    const loading = (
      <tr>
        <td>
          <span className={styles.blinking}>loading...</span>
        </td>
        <td>
          <span className={styles.blinking}>loading...</span>
        </td>
        <td>
          <span className={styles.blinking}>loading...</span>
        </td>
      </tr>
    );

    const showContent = () => {
      const { displayData } = this.props;
      return (
        <React.Fragment>
          {displayData.map(el => (
            <tr key={el["Data-Id"]}>
              <td>
                <a href={el.URL}>{el.Title}</a>
              </td>
              <td>{el.Description}</td>
              <td>{el.Address}</td>
            </tr>
          ))}
        </React.Fragment>
      );
    };
    const {
      displayData,
      filteredData,
      pageSize,
      onPageChange,
      currentPage
    } = this.props;
    console.log("Table.jsx, filteredData: ", filteredData);
    //console.log("table.text: ", this.props.text);
    return (
      <React.Fragment>
        <input type="text" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "25%" }}>
                Title
              </th>
              <th scope="col" style={{ width: "50%" }}>
                Description
              </th>
              <th scope="col" style={{ width: "25%" }}>
                Address
              </th>
            </tr>
          </thead>
          <tbody>{displayData === null ? loading : showContent()}</tbody>
        </table>
        <Pagination
          itemsCount={filteredData === null ? 0 : filteredData.length}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}
export default Table;
