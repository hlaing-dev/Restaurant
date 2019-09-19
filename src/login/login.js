import React from 'react'
import KumoButton from '../elements/kumoButton'
import { withMedia } from 'react-media-query-hoc';
import KumoInputBox from '../elements/kumoInputBox';


const loginPage = (props) => {
    const {pwdView,handleInputChange,_handleClick,handlePwdView}=props

    return (
        <div className='container-fluid' style={{ background: 'linear-gradient(to bottom, #02AAB0 0%, #00CDAC 100%)', height: '100vh' }}>
            <div className='row justify-content-center text-light align-items-center' style={{ height: '100%' }}>
                <div className='col-lg-4 col-md-6 col-10 col-xl-4' >
                    <form>
                        <div className='d-flex flex-column align-items-center' >
                            <div style={{ width: 70, height: 70, borderRadius: '50%', border: '2px solid white', textAlign: 'center', color: 'white'}}><span><i className="fa fa-user fa-3x"></i></span></div>
                            <h2 className='p-3'>User Login</h2>
                        </div>

                        <label style={{ fontSize: '1.2rem' }} >User Name</label>
                        <KumoInputBox type='text' className='form-control mb-3' onChange={(e)=>handleInputChange({User_Name:e.target.value})} placeholder='User Name' />
                        <label style={{ fontSize: '1.2rem' }} >Password</label>
                        <div className='w-100 mb-4'>
                          <KumoInputBox type={pwdView?'text':'password'} className='form-control' onChange={(e)=>handleInputChange({Password:e.target.value})} placeholder='Password'  />
                          <span onClick={handlePwdView} style={{cursor:'pointer',float:'right',marginTop:'-40px',color:'silver',marginRight:'20px',fontSize:'16pt'}}>{pwdView ?<i className="fa fa-eye" ></i>:<i className="fa fa-eye-slash"></i>}</span>
                        </div>
                        <KumoButton                        
                            type='submit'
                            text='Login'                            
                            style={{ height: 50 }}
                            onClick={_handleClick}
                        />
                    </form>

                </div>

            </div>
        </div>
    )
}
export default withMedia(loginPage)