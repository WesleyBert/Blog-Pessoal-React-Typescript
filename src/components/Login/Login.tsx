import { Link, useNavigate } from "react-router-dom";



function Login() {

    let navigate = useNavigate()
    return (
        <div>
            <h2 className="text-slate-900 text-5x1">Login</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className="hover:underline mx-4"
                >Login useNavigate
                </button>
                <Link to="/Home" className="hover:underline mx-4">Login por Link</Link>
            </div>
        </div>
    )
}

export default Login;