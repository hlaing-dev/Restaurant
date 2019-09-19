import React from 'react'
import KumoInputBox from '../elements/kumoInputBox';
import KumoButton from '../elements/kumoButton';

const ProfileEdit = (props) => {
    const { name, password, confirm_password, role, age, address } = props
    return (
        <div className="container-fluid p-3">
            <div className="row justify-content-center m-1">
                <div className="col-lg-4 bg-light p-2">
                    <h3>Account Setting</h3>
                    <label>Staff Name</label>
                    <KumoInputBox value={name} />

                    <label>Password</label>
                    <KumoInputBox type="password" value={password} />

                    <label>Confirm Password</label>
                    <KumoInputBox type="password" value={confirm_password} />

                    <label>Role</label>
                    <KumoInputBox type="text" className="mb-4" value={role} disabled />

                    <label>Age</label>
                    <KumoInputBox type="text" value={age} />

                    <label>Addrss</label>
                    <KumoInputBox type="textarea" value={address} />

                    <KumoButton text="Change" className="mt-4"></KumoButton>
                </div>
            </div>
        </div>
    )
}
export default ProfileEdit;