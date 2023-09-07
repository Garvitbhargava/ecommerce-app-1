import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import blog from "../images/blog-1.jpg"
import Container from '../component/Container'


const SingleBlog = () => {
  return (
   <>
    <Meta title={"Dynamic blog Name"} />
 <BreadCrump title="Dynamic Blog Name" />
 <Container class1='blog-wrapper home-wrapper-2 py-5'>
     
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
              <Link to='/blogs' className='d-flex align-items-center gap-10'> 
              <HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>  
 <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
 <img src={blog} className='img-fluid w-100 my-4' alt='blog'/>
 <p>You're only as good as your lat collection,which is an enormous pressure.I Think
    there is something about luxury- it's not something people need,but it's what they want.
    It really pulls at their heart.I have a fantastic relationship with money.Scelerisque sociosqu
    ullamcorper urna nisl mollis vestibulum pretium commondo inceptos cum condimentum placerat
    diam venenatis blandit hac eget dis lacus a partuirent a accumsan nisl ante vestibulum.
 </p>
            </div>
          </div>
        </div>
      
    </Container>
   </>
  )
}

export default SingleBlog