 

const Register = () => {

    const handleRegister = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        console.log('hi i am console log')
       
    }

    return (
        <div>
             <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-6 ml-28"> Please register</h2>
                <form onSubmit={handleRegister}>
                  <input className="mb-4 py-2 px-4 w-3/4 rounded-lg" type="email"
                  name="email"placeholder="Email Address" />
                  <input className="mb-4 py-2 px-4 w-3/4 rounded-lg" type="password"
                  name="password"placeholder="Your password" />
                  <input className="btn btn-success mb-4 w-3/4 text-white" type="submit"/>
                </form>
             </div>
        </div>
    );
};

export default Register;