import React, { useState } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import "./form.css";

const CreateTeacherForm = () => {
  const INITIAL_STATE = {
    first_name : "",
    last_name : "",
    email : "",
    phone_number : "",
  };

  const [fData, setFormData] = useState(INITIAL_STATE);
//   let history = useHistory();
  // console.log(history);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(newUser.id);
    console.log({ ...fData });

    // window.localStorage.setItem("user", JSON.stringify(fData))
    // alert(
    //   ` user ${fData.name}, password ${fData.description}, first name ${fData.user_id}`,
    // );
    // history.push("/workouts");
 
  };

  return (
    <>
      <h2 className="formHeader">
        Create a teacher profile!
      </h2>
      <Form className="formBody" onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="labelTitle" htmlFor="first_name">
             First Name
          </Label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="Place your First Name Here"
            type="text"
            value={fData.first_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            Last Name
          </Label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Place your Last Name Here"
            type="text"
            value={fData.last_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            E-Mail
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Place your e-mail"
            type="email"
            value={fData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            Phone Number
          </Label>
          <Input
            id="phone_number"
            name="Phone_number"
            placeholder="Place your phone number"
            type="text"
            value={fData.phone_number}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </>
  );
};

export default CreateTeacherForm;