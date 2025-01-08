import React from 'react'

export default function Contact() {
  return (
    < >
      <section className='p-5'>
                <div className=" container">
                    <h1 className=' text-center roboto textblue text-uppercase mt-5'>
                        conatct section
                    </h1>
                    <div className=' d-flex flex-row justify-content-center align-items-center'>
                        <span className=' widthsmallpx bgblue '> </span>
                        <span>
                            <i className=' fa-solid fa-star textblue ms-2 '></i>
                        </span>
                        <span className=' widthsmallpx  bgblue ms-2'> </span>
                    </div>
                    <div className="form-floating mb-3 mt-5 w-75  m-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder="userName" />
                        <label htmlFor="floatingInput">userName</label>
                    </div>
                    <div className="form-floating mb-3 mt-5 w-75  m-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder="userName" />
                        <label htmlFor="floatingInput">userAge</label>
                    </div>
                    <div className="form-floating mb-3 mt-5 w-75  m-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder="userName" />
                        <label htmlFor="floatingInput">userEmail</label>
                    </div>
                    <div className="form-floating mb-3 mt-5 w-75  m-auto">
                        <input type="password" className="form-control" id="floatingInput" placeholder="userName" />
                        <label htmlFor="floatingInput">userPassword</label>
                    </div>
                   
                    <button className="btn btn-success rounded-3 marginstart pb-2 mb-3">send Messages</button>
                  
                </div>
            </section>

    </>

  )
}
