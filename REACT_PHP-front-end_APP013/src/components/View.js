import axios from "axios";
import React, { PureComponent } from "react";
import RecordList from "./RecordList";

class View extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const url =
      "http://localhost/CRUD-REACT-PHP-MySQL/back-end-php-mysql/list.php";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  userList() {
    return this.state.users.map(function (object, i) {
      return <RecordList object={object} key={i} />;
    });
  }
  render() {
    // console.log("recharger");

    return (
      <div>
        <h3>Liste des utilisateurs</h3>
        <table className="table table-bordered table-hover table-striped table-light text-center">
          <thead className="table-dark ">
            <tr>
              <th>Prenom</th>
              <th>Nom</th>
              <th>E-mail</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default View;
