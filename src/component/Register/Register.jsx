import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
 

const Register = () => {

    const [registerError ,setRegisterError] =useState('');
    const[registerSuccess,setRegisterSuccess]=useState('');

    const [showPassword,setShowPassword]=useState(false);

    const handleRegister = e=>{
        e.preventDefault();
        const name =e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms =e.target.terms.checked;
        console.log(name,email,password,terms);
        
        setRegisterError('')
        setRegisterSuccess('')

        if(password.length<6){
            setRegisterError('password should be at least 6 caracters or longer');
            return;
        }

        else if ( !/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one upper case caracters');
            return;
        }
        else if (!terms){
            setRegisterError('Please accept our terms and conditions!')
            return
        }

        
       
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user);
            setRegisterSuccess('user created successfully');

            // update profile
            updateProfile(result.user,{
             displayName:name,
             photoURL: 'https://www.google.com/search?sca_esv=0d521506f00f1162&rlz=1C1ONGR_enBD1031BD1031&sxsrf=ADLYWIL0BQXG_XsWroe9s03pn1bGMTcTMA:1720014919141&q=image&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2joZDvir2QxhZkTA8rK1etu4Y3067o-fAl7lygmK690uJyNhakMg---uzr_Yo0p3ZtGQanELZDOaVjFN7yUDe4fgm8aQJKQiASDBoi8CDjwBb6GIRacDnd6jmUt3-NxqSASwMc-y&sa=X&ved=2ahUKEwju743ygouHAxUJTWcHHWPbAJ8QtKgLegQIDRAB&biw=1280&bih=551&dpr=1.5#vhid=nZ8Jts2Gsp_qMM&vssid=mosaic'
            })

            .then(()=>{
                console.log('profile updated')
            })
            .catch((error)=>{
                console.error(error);
            })

            sendEmailVerification(result.user)
            .then(()=>{
               alert('please check your email and verify your account');
            })
            .catch(error=>{
            console.error(error);
            });
        
  
        })
        .catch(error=>{
            console.log(error);
            setRegisterError(error.message);
        })

    }

    
  
    return (
        <div>
             <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-6 ml-28"> Please register</h2>
                <form onSubmit={handleRegister}>
                  <input className="mb-4 py-2 px-4  w-full rounded-lg" type="text"
                  name="name"placeholder="Your name" required />

                  <input className="mb-4 py-2 px-4  w-full rounded-lg" type="email"
                  name="email"placeholder="Email Address" required />

                 <div className="relative mb-4">
                 <input className=" py-2 px-4 w-full rounded-lg" type={showPassword? "text":"password"}
                  name="password"placeholder="Your password" required />
                  <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}> {showPassword ? <FaRegEye></FaRegEye>: <FaRegEyeSlash></FaRegEyeSlash>}</span>
                 </div>

                 <div className="mb-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2">Accept our <a href="">Terms and Conditions</a></label>
                 </div>

                  <input className="btn btn-success mb-4 w-full text-white" type="submit"/>
                </form>

                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    registerSuccess && <p className="text-green-700">{registerSuccess}</p>
                }

                <p>Already have an accout? <Link to='/login'>login</Link></p>
             </div>
        </div>
    );
};

export default Register;