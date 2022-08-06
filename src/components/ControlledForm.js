import React, { useState } from 'react'

export default function ControlledForm() {
    const [userData, setUserData] = useState(
        {
            'first_name': '',
            'last_name': '',
            'profession':'',
            'gender':'male'
        }

    );
    const [errors,setErrors] = useState({
        first_name : '',
        last_name : '',
        profession :'',
    });
    const [isSubmitted,setIsSubmitted] = useState(false);

    const handleChange = (evt) => {
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value
        });

        setErrors({
            ...errors,
            [evt.target.name] : ''
        });
        //console.log(evt.target.value);
    }

    const { first_name, last_name, profession,gender } = userData;

    const handleForm = (evt) => {
        evt.preventDefault();
        //console.log(userData);

        const userErrors = {
            first_name : '',
            last_name : '',
            profession :'',
        }
        let isErros = false;
        if(userData.first_name === ''){
            isErros = true;
            userErrors.first_name = 'First name is required';
        }
        if(userData.last_name === ''){
            isErros = true;
            userErrors.last_name = 'Last name is required';
        }
        if(userData.profession === ''){
            isErros = true;
            userErrors.profession = 'Profession is required';
        }
  
        setErrors(
            userErrors
        );
        //console.log(userErrors);
        console.log(errors);
        if(isErros) return
        //if(userErrors.values.some( (elm) => elm.length > 0)){
          //  console.log(userErrors.values);
        //}
        setIsSubmitted(true);
        
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row" style={{width:'600px'}}>
                    <div className="col-md-12">
                        <form onSubmit={handleForm}>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label className="control-label sr-only" htmlFor="firstname">First Name</label>
                                    <input type="text" name="first_name" id="firstname" className="form-control" onChange={handleChange} value={first_name} />
                                    <span style={{color:'red'}}>{errors.first_name && errors.first_name}</span>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label className="control-label sr-only" htmlFor="lastname">Last Name</label>
                                    <input type="text" name="last_name" id="lastname" className="form-control" onChange={handleChange} value={last_name} />
                                    <span style={{color:'red'}}>{errors.last_name && errors.last_name}</span>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label className="control-label sr-only" htmlFor="profession">Prefession</label>
                                    <select className="form-control" id='profession' name='profession'
                                        value={profession} onChange={handleChange}
                                    >
                                        <option value="">Please Select</option>
                                        <option value="programmer">Programmer</option>
                                        <option value="softwareEngineer">Software Engineer</option>
                                        <option value="mlEngineer">ML Engineer</option>
                                    </select>
                                    <span style={{color:'red'}}>{errors.profession && errors.profession}</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-xs-12">
                                <label className="control-label sr-only" htmlFor="Gender">Gender</label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={handleChange}/>
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <button type="submit" className="btn btn-primary col-xs-12" id="submitbtn">Complete Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
