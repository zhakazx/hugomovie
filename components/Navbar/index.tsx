import React from 'react'

const index = () => {
  return (
    <div className="p-4">
        <div className="navbar bg-white shadow-md p-3 rounded-xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl md:text-2xl tracking-wide">HugoMovie</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered bg-white w-auto" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default index