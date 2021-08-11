import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";

class Update extends Component {
  constructor(props) {
    super(props);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);

    this.state = {
      prenom: "null",
      nom: "null",
      mail: "null@gmail.com",
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

  componentDidMount = (e) => {
    axios
      .get(
        "http://localhost/CRUD-REACT-PHP-MySQL/back-end-php-mysql/getById?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          prenom: response.data.prenom,
          nom: response.data.nom,
          mail: response.data.email,
        });
      })

      .catch((err) => console.log(err));
  };
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      first_name: this.state.prenom,
      last_name: this.state.nom,
      mail: this.state.mail,
    };
    // console.log(user_data);

    axios
      .post(
        "http://localhost/CRUD-REACT-PHP-MySQL/back-end-php-mysql/update.php?id=" +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));
  };
  annuler = () => {
    this.setState({
      redirect: true,
    });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/View" />;
    }
    return (
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Modifier les infos de cet utlisateur</h3>
        <form onSubmit={this.onSubmit} className="w-50 mt-2">
          <div className="form-group  ">
            <label> prenom</label>
            <input
              type="text"
              name="prenom"
              id=""
              className="form-control"
              placeholder=""
              onChange={this.onChangePrenom}
              value={this.state.prenom}
            />
          </div>
          <div className="form-group">
            <label> Nom</label>
            <input
              type="text"
              name="nom"
              id=""
              className="form-control"
              placeholder=""
              onChange={this.onChangeNom}
              value={this.state.nom}
            />
          </div>
          <div className="form-group">
            <label> e-mail</label>
            <input
              type="mail"
              name="mail"
              id=""
              className="form-control"
              placeholder=""
              onChange={this.onChangeMail}
              value={this.state.mail}
            />
          </div>
          <div className="form-group d-flex">
            <input
              type="submit"
              name=""
              id=""
              value="Update"
              className="btn btn-outline-info"
            />
            <input
              type="button"
              name=""
              id=""
              value="Annuler"
              className="btn btn-outline-dark ml-auto"
              onClick={this.annuler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Update;
