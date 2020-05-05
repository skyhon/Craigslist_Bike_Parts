import _ from "lodash";
import React, { Component } from "react";
import BikePartsPage from "./components/BikePartsPage";
import HelloWorlds from "./components/HelloWorlds";
import Cities from "./components/Cities";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import { paginate } from "./components/utilities/paginate";
import axios from "axios";

class App extends Component {
  state = {
    helloworlds: [
      { id: 1, count: 3, liked: true },
      { id: 2, count: 4, liked: false },
      { id: 3, count: 6, liked: true },
    ],
    data: null,
    filteredData: null,
    displayData: null,
    pageSize: 100,
    currentPage: 1,
  };

  componentDidMount() {
    const localStorageData = localStorage.getItem("localStorageData");
    localStorageData !== null
      ? this.setState({ data: JSON.parse(localStorageData) }, () =>
          this.setState({ filteredData: this.state.data }, () => {
            const localStorageCurrentPage = localStorage.getItem(
              "localStorageCurrentPage"
            );
            if (localStorageCurrentPage !== null)
              this.handlePageChange(localStorageCurrentPage);
          })
        )
      : axios
          .get("data/result-bike_parts-multi-pages.json")
          .then(({ data }) => {
            this.setState({ data });
            this.setState({ filteredData: data });
            const { currentPage } = this.state;
            this.handlePageChange(currentPage);
            localStorage.setItem("localStorageData", JSON.stringify(data));
          });
  }

  handleIncrement = (helloworld) => {
    console.log("handleIncrement ", helloworld);
    let helloworlds = [...this.state.helloworlds];
    const index = helloworlds.indexOf(helloworld);
    helloworlds[index] = { ...helloworld };
    helloworlds[index].count++;
    this.setState({ helloworlds });
  };

  handleDecrement = (helloworld) => {
    console.log("handleDecrement", helloworld);
    let helloworlds = [...this.state.helloworlds];
    const index = helloworlds.indexOf(helloworld);
    helloworlds[index] = { ...helloworld };
    const { count } = helloworlds[index];
    helloworlds[index].count = count <= 0 ? 0 : count - 1;
    this.setState({ helloworlds });
  };

  handleDelete = (counterId) => {
    const helloworlds = this.state.helloworlds.filter(
      (h) => h.id !== counterId
    );
    this.setState({ helloworlds });
  };

  handleLike = (helloworld) => {
    let helloworlds = [...this.state.helloworlds];
    const index = helloworlds.indexOf(helloworld);
    helloworlds[index] = { ...helloworld };
    helloworlds[index].liked = !helloworlds[index].liked;
    this.setState({ helloworlds });
  };

  handlePageChange = (page) => {
    localStorage.setItem("localStorageCurrentPage", page);
    this.setState({ currentPage: Number(page) }, () => {
      const { filteredData, pageSize, currentPage } = this.state;
      this.setState(
        {
          displayData: paginate(filteredData, currentPage, pageSize),
        },
        () =>
          console.log("handlePageChange, displayData: ", this.state.displayData)
      );
    });
  };

  handleCityChange = (city) => {
    const filteredData =
      city.toLowerCase() === "show all"
        ? this.state.data
        : _(this.state.data)
            .filter((el) => el.Address.toLowerCase() === city.toLowerCase())
            .value();

    this.setState({ filteredData }, () => this.handlePageChange(1));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          helloworldCount={
            this.state.filteredData === null
              ? 0
              : this.state.filteredData.length
          }
        />
        <BikePartsPage title="Bike Parts Page" />
        <HelloWorlds
          helloworlds={this.state.helloworlds}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
        <br />
        <Cities onCityChange={this.handleCityChange} data={this.state.data} />
        <br />
        <Table
          filteredData={this.state.filteredData}
          displayData={this.state.displayData}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default App;
