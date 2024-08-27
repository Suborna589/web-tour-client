import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Components/SectionTitle/hooks/useAxiosPublic";
import { axiosSecure } from "../Components/SectionTitle/hooks/useAxiosSecure";


export const AuthContext=createContext(null) 

const auth = getAuth(app);

const AuthProvider = ({children}) => {  
    const [user,setUser]=useState(null) 
    const [loading,setLoading]=useState(true) 
    const googleProvider= new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic()

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password) 
        
    } 



  const signIn=(email,password) =>{ 
    setLoading(true);
 return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin=()=>{  
    setLoading(true);
    return signInWithPopup(auth, googleProvider)

}

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

const updateUserProfile=(name,photo)=>{ 


 return updateProfile(auth.currentUser, {
  displayName: name, photoURL:photo
})


}

    

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
         if(currentUser){
            const userInfo={email:currentUser.email};
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
               if (res.data.token){

                localStorage.setItem("access-token",res.data.token)
                setLoading(false);
               }

            }

   )


         }
         else{ 
            localStorage.removeItem('access-token')
            setLoading(false);

         }
         
        });
         
     
   

        return () =>{axiosSecure
            return unsubscribe();
        }
    },[axiosPublic])

const authInfo={ 
    user,
    loading, 
    createUser, 
    signIn, 
    logOut,
    updateUserProfile,
    googleLogin
   


}




    return (
        <AuthContext.Provider  value={authInfo}> 
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;