import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const BreadCrump = (props) =>
{
    const { title } = props;   
  return (
      <div className='breadcrump mb-0 py-4'>
          <div className='container-xxl'>
              <div className='row'>
                  <div className='col-12 d-flex justify-content-center align-items-center'>
                      <p className="text-center">
                          <Link to="/HOME" className='text-dark'>
                              Home &nbsp;
                          </Link>/{title}
                      </p>
                  </div>  
              </div>
          </div>
    </div>
  )
}

export default BreadCrump
