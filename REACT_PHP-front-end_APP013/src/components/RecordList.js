import axios from "axios";

import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class RecordList extends PureComponent {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      redirect: false,
    };
  }
  delete = () => {
    axios
      .get(
        "http://localhost/CRUD-REACT-PHP-MySQL/back-end-php-mysql/delete.php?id=" +
          this.props.object.id
      )
      .then(
        this.setState({
          redirect: true,
        })
      )

      .catch((err) => console.log(err));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/View" />;
    }
    return (
      <tr>
        <td>{this.props.object.prenom}</td>
        <td>{this.props.object.nom}</td>
        <td>{this.props.object.email}</td>
        <td>
          <Link to={"/edit/" + this.props.object.id}>
            <button className="btn btn-outline-primary mr-2"> Edit </button>
          </Link>

          <button className="btn btn-outline-danger" onClick={this.delete}>
            {" "}
            Delete{" "}
          </button>
        </td>
      </tr>
    );
  }
}

export default RecordList;
