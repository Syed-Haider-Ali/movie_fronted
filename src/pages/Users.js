import React,{useState} from 'react'
import axios from 'axios'
const BASE_URL = "https://movie-backend-sepia.vercel.app/"


const Users = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

   


    const btnAdd = async ()=>{
        const res = await axios.post('/api/users', {
            name,password
        })
        res();
    }

  return (
    <div>
        <form>
            <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
                <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Hero</label>
                <input type="text" className="form-control" name="hero" id="hero" aria-describedby="emailHelp"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>

            <button type="submit" onClick={btnAdd} className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Users