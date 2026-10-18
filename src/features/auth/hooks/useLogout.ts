import { useDispatch } from "react-redux";
import { authActions } from "../slices/auth.slice";
import { deleteToken } from "../server/auth.action";
import { useRouter } from "next/navigation";

export default  function useLogout(){
const dispatch = useDispatch()
const router = useRouter()
  const logout =  async ()=>{

 await deleteToken()
     const {setAuthState} = authActions
dispatch(setAuthState({isAuthenticated : false , userInfo :null}))
router.push('/login')
router.refresh();
  };
  return {logout}
}