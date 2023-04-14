import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
     
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    lastname: "",
    inlineRadioOptions: "",
    select: "",
    checkedItems: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Dasd"); 
    console.log(formData); 
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          name="lastname"
                          className="form-control form-control-lg"
                          value={formData.lastname}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="date"
                          id="birthdayDate"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="birthdayDate" className="form-label">
                          Birthday
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="female"
                          checked={formData.inlineRadioOptions === "female"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlhtmlFor="femaleGender"
                        >
                          Female
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="male"
                          checked={formData.inlineRadioOptions === "male"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="other"
                          checked={formData.inlineRadioOptions == "other"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        name="option1"
                        value={formData.checkedItems}
                        onChange={handleInputChange}
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        frist
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        onChange={handleInputChange.option2}
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        second
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control-lg"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <select
                        className="select form-control-lg"
                        name="select"
                        value={formData.select}
                        onChange={handleInputChange}
                      >
                        <option value="Choose option" disabled>
                          Choose option
                        </option>
                        <option value="Subject 1">Subject 1</option>
                        <option value="Subject 2">Subject 2</option>
                        <option value="SubjectSubject 3">
                          SubjectSubject 3
                        </option>
                      </select>
                      <label className="form-label select-label">
                        Choose option
                      </label>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
