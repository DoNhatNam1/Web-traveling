import React from 'react'
import './profilebody.css'

const ProfileBody = () => {
  return (
    <>
    <div className='bodyProfileSection'>

      <div className="labelGp grid">
        <div className="labelItem flex">
          <div className="spanItem">
          <span>Họ và tên:</span>
          </div>
            <div className="PagrarphItem">
            <p>Đỗ Nhật Nam</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Tuổi:</span>
          </div>
            <div className="PagrarphItem">
            <p>21 tuổi</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Quê quán:</span>
          </div>
            <div className="PagrarphItem">
            <p>Vũng Tàu</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Số điện thoại:</span>
          </div>
            <div className="PagrarphItem">
            <p>0363982926</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Địa chỉ hiện tại:</span>
          </div>
            <div className="PagrarphItem">
            <p>Chung cư Bàu Cát 2 Lô B</p>
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ProfileBody