import React, { Component } from "react";
import axios from "axios";

class Ajout extends Component {
  constructor(props) {
    super(props);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);

    this.state = {
      prenom: "",
      nom: "",
      mail: "",
      redirect: false,
    };
  }
  onChangePrenom = (e) => {
    this.setState({
      prenom: e.target.value,
    });
  };
  onChangeNom = (e) => {
    this.setState({
      nom: e.target.value,
    });
  };
  onChangeMail = (e) => {
    this.setState({
      mail: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const user_data = {
      first_name: this.state.prenom,
      last_name: this.state.nom,
      mail: this.state.mail,
    };
    // console.log(user_data);
    const url =
      "http://localhost/CRUD-REACT-PHP-MySQL/back-end-php-mysql/insert.php";
    axios
      .post(url, user_data)
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({
      nom: "",
      prenom: "",
      mail: "",
    });
  };

  render() {
    return (
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3>ajouter un nouvel user</h3>
        <form onSubmit={this.onSubmit} className="w-50">
          <div className="form-group  ">
            <label> prenom</label>
            <input
              type="text"
              name="prenom"
              id=""
              className="form-control"
              placeholder="Prenom"
              value={this.state.prenom}
              onChange={this.onChangePrenom}
            />
          </div>
          <div className="form-group">
            <label> Nom</label>
            <input
              type="text"
              name="nom"
              id=""
              className="form-control"
              placeholder="Nom"
              value={this.state.nom}
              onChange={this.onChangeNom}
            />
          </div>
          <div className="form-group">
            <label> e-mail</label>
            <input
              type="mail"
              name="mail"
              id=""
              className="form-control"
              placeholder="e-mail"
              onChange={this.onChangeMail}
              value={this.state.mail}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name=""
              id=""
              value="Enregistrer"
              className="btn btn-outline-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Ajout;
