
import React from 'react'
import '../styles/Form.css'
import Status from './Status';

// import TextField from '@mui/material/TextField';
export default function Form() {


    const [form, setForm] = React.useState({
        title: "",
        minExp: "",
        maxExp: "",
        description: "",
        category: [],
        location: "",
        functionalArea: [],
        tag: [],
        minBatch: [],
        maxBatch: []

    })

    const [page , setPage] = React.useState(false);

    // console.log(form);
    function handleChange(event) {
        console.log(event)
        const { name, value, type, checked } = event.target
        setForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
     event.preventDefault();
     console.log("clicked");
    // data logged in console
    //  console.log(form)
    setPage(true)
    
    }

    


    return (
        <div className='main-div'>
        <form className='form-box' onSubmit={handleSubmit}>
            <h1 className='box-detail'>Basic Details</h1>
            <hr></hr>

     {/* -----------------job title------------- */}
            <label>Job Title*</label><br></br>
            <input className='form-input'
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder='write a title that appropriately describes the job'
            /><br></br>

     {/* ------------------job location--------------------- */}

            <label>Location*</label><br></br>

            <div className="container">
                <input className='form-input'
                    value={form.location}
                    name="location"
                    placeholder="+ Locations"
                    onChange={handleChange} />
            </div>

      {/* ------------------Yera of experience--------------------- */}

            <label>Years of expeirence*</label>
            <div className='form-exp'>
                <select
                    className='form-input side'
                    placeholder='Select Min'
                    name="maxExp"
                    value={form.maxExp}
                    onChange={handleChange}
                >
                    <option value="">Select Min</option>
                    <option value="less than 1">less than 1</option>
                    <option value="1.5">1.5 year</option>
                    <option value="2 years">2 year</option>
                    <option value="3 years">3 year</option>
                </select>

                <select
                    className='form-input side'
                    placeholder='Select Min in Moths'
                    name="minExp"
                    value={form.minExp}
                    onChange={handleChange}
                >
                    <option value="">Select Min</option>
                    <option value="0">0 / fresher</option>
                    <option value="6 Months">6 Months</option>
                    <option value="3 Months">3 Months</option>
                </select>


            </div>


      {/* ------------------job decription--------------------- */}

            <label>Job description*</label><br></br>
            <input className='form-input job'
                placeholder='Describe the role and responsibilities , skills required for the job and help the candidates understand the role better'
                name="description"
                value={form.description}
                onChange={handleChange}
            />

      {/* ------------------------------------- TARGETING-------------------------------- */}
            <h1 className='box-detail'>Targeting</h1>

      {/* ------------------category--------------------- */}

            <div className='form-cat'>
                <div>
                    category
                    <select

                        className='form-input side'
                        placeholder='Select'
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Full Stack developer">Full stack developer</option>
                        <option value="front-end Dev">Front-end dev</option>
                        <option value="Backend Dev">Backend Dev</option>
                        <option value="Node Dev">"Node Dev</option>
                    </select>
                </div>
                <div>
                    Functional Area
                    <select
                        className='form-input side'
                        placeholder='Functional Area'
                        name="functionalArea"
                        value={form.functionalArea}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="In office">In office</option>
                        <option value="Work from home">Work from home</option>
                    </select>

                </div>
            </div>
                   
      {/* ------------------Graduation btach--------------------- */}

            <div className='form-cat'>
                <div>
                    Graduation Min batch
                    <select

                        className='form-input side'
                        placeholder='Select'
                        name="minBatch"
                        value={form.minBatch}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>


                    </select>
                </div>

                <div>
                    Graduation Max batch
                    <select
                        className='form-input side sec'
                        placeholder='Select'
                        name="maxBatch"
                        value={form.maxBatch}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>

                    </select>
                </div>
            </div>



      {/* ------------------Tags--------------------- */}
            <label className='form-label'>Tags</label><br></br>
            <input className='form-input'
                value={form.tag}
                name="tag"
                placeholder="+ Tags"
                onChange={handleChange} />

     {/* ------------------Form submission--------------------- */}
         <button onClick={handleSubmit}>Post Job</button>
        </form>

       {page && <Status  data={JSON.stringify(form)}/>}
       
       
        </div> 
    )

   
   

}