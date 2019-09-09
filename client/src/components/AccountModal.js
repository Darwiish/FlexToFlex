import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { connect } from "react-redux";
import { addAccount } from "../actions/accountActions";

class AccountModal extends Component {
  state = {
    modal: false,
    dropdownOpen: false,
    name: "",
    accountHolder: "",
    accountType: "Vælge Vogn",
    accountNumber: 123
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleType = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  select = event => {
    this.setState({
      accountType: event.target.innerHTML
    });
  };

  onSubmit = e => {
    //prevent default submission
    e.preventDefault();
    const newAccount = {
      name: this.state.name,
      accountHolder: this.state.accountHolder,
      accountType: this.state.accountType,
      accountNumber: this.state.accountNumber
    };

    //add item via addItem action
    this.props.addAccount(newAccount);

    //close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Tilføj konti
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Tilføj</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="account">Vogn</Label>
                <Dropdown
                  style={{ marginBottom: "1rem" }}
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleType}
                >
                  <DropdownToggle caret>
                    {this.state.accountType}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Vælge</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.select}>3917</DropdownItem>
                    <DropdownItem onClick={this.select}>3919</DropdownItem>
                    <DropdownItem onClick={this.select}>3927</DropdownItem>
                    <DropdownItem onClick={this.select}>3929</DropdownItem>
                    <DropdownItem onClick={this.select}>3937</DropdownItem>
                    <DropdownItem onClick={this.select}>3943</DropdownItem>
                    <DropdownItem onClick={this.select}>3947</DropdownItem>
                    <DropdownItem onClick={this.select}>3957</DropdownItem>
                    <DropdownItem onClick={this.select}>395</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {/* <InputGroup style={{ marginBottom: '1rem' }} >
									<Input 
										type="text"
										name="name"
										id="accountName"
										placeholder="Account Name"
										onChange={this.onChange}
									/>
								</InputGroup> */}

                <InputGroup style={{ marginBottom: "1rem" }}>
                  <Input
                    type="text"
                    name="accountHolder"
                    id="accountHolder"
                    placeholder="Chauffør Navn"
                    onChange={this.onChange}
                  />
                </InputGroup>
                {/* <InputGroup>
									<Input 
										type="number"
										name="accountNumber"
										id="accountNumber"
										placeholder="Vogn number"
										onChange={this.onChange}
									/>
								</InputGroup>
							         */}
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Account
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account
});
export default connect(
  mapStateToProps,
  { addAccount }
)(AccountModal);
