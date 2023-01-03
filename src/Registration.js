import {MultiSelectInput} from "./widgets/MultiSelectInput";

export const Registration = () => {
    let sports = ["Fishing", "Tennis", "Hiking", "Running", "Golf", "Biking", "Pickleball",
        "Croquet", "Beach Vollyball", "Roller skating/Blading", "Others"]
    return (
        <div className="container">
            <div className="container-in">
                <div className="title">
                    <h1>Register</h1>
                    <h3>Create new customer account</h3>
                </div>
                <form>
                    <div>
                        <div className="grid-2-2-1">
                            <div className="card mr-10-l">
                                <div className="p-20">
                                    <h5 className="section-title">Personal information</h5>
                                    <div className="grid-2-2-1">
                                        <div className="form-control">
                                            <label htmlFor="id_first_name">First name <span>*</span></label>
                                            <div className="input-group">
                                                <input id="id_first_name" name="first_name"
                                                       placeholder="Enter first name"/>
                                                <i className="ri-profile-line"/>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="id_last_name">Last name <span>*</span></label>
                                            <div className="input-group">
                                                <input id="id_last_name" name="last_name"
                                                       placeholder="Enter last name"/>
                                                <i className="ri-user-3-line"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-2-2-1">
                                        <div className="form-control">
                                            <label htmlFor="id_gender">Gender <span>*</span></label>
                                            <select id="id_gender" name="gender">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                <option value="O">Others</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="id_dob">Date of birth <span>*</span></label>
                                            <input className="single" type="date" id="id_dob" name="dob"
                                                   placeholder="Date of birth"/>
                                        </div>
                                    </div>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <label htmlFor="id_mobile">Mobile number</label>
                                            <div className="input-group">
                                                <input maxLength="10" id="id_mobile" name="mobile" pattern="[0-9]{10}"
                                                       placeholder="Enter mobile number"/>
                                                <i className="ri-smartphone-line"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-2-2-1">
                                        <div className="form-control">
                                            <label htmlFor="id_country">Country</label>
                                            <div className="input-group">
                                                <input className="single" list="countries" id="id_country"
                                                       name="country"
                                                       placeholder="Country"/>
                                                <i className="ri-globe-line"/>
                                            </div>
                                            <datalist id="countries">
                                                <option>United States</option>
                                            </datalist>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="id_state">State</label>
                                            <select id="id_state" name="state">
                                                <option value="NY">New York</option>
                                                <option value="WD">Washington DC</option>
                                                <option value="MX">Mexico</option>
                                                <option value="MI">Miami</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <label htmlFor="id_sports">Favourite sports <span>*</span></label>
                                            <MultiSelectInput items={sports}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card card-accent-trans ml-10-l">
                                <div className="p-20">
                                    <h5 className="section-title">Sign-In information</h5>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <label htmlFor="id_email">Email address <span>*</span></label>
                                            <div className="input-group">
                                                <input type="email" id="id_email" name="email"
                                                       placeholder="Enter email address"/>
                                                <i className="ri-mail-open-line"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <label htmlFor="id_password">Password <span>*</span></label>
                                            <div className="input-group">
                                                <input id="id_password" name="password"
                                                       placeholder="Enter password"/>
                                                <i className="ri-lock-2-line"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <label htmlFor="id_password2">Confirm password <span>*</span></label>
                                            <div className="input-group">
                                                <input id="id_password2" name="password2"
                                                       placeholder="Re-enter the password"/>
                                                <i className="ri-lock-2-line"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-middle mv-10">
                                        <div className="grid-2-2-1 flex-fill flex-middle">
                                            <div className="check-item flex flex-middle">
                                                <input id="id_newsletter" className="mr-5" type="checkbox"/>
                                                <label htmlFor="id_newsletter">Signup for the newsletter</label>
                                            </div>
                                            <div className="check-item flex flex-middle">
                                                <input id="id_remote_shopping" className="mr-5" type="checkbox"/>
                                                <label htmlFor="id_remote_shopping">Allow remote shopping
                                                    assistance</label>
                                            </div>
                                        </div>
                                        <a className="link" href="#"><i className="ri-question-line"/> </a>
                                    </div>

                                    <div className="grid-1-1-1">
                                        <div className="form-control">
                                            <button className="btn">Create an account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}