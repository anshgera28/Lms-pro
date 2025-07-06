import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { useLoginUserMutation, useRegisterUserMutation } from "../features/api/authApi"
import { toast } from "sonner"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
  const [signupInput, setSignupInput] = useState({name:"",email:"",password:""})
  const [loginInput, setLoginInput] = useState({email:"",password:""})
  const [error, setError] = useState("")

  const[registerUser, {data:registerData, error:registerError, isLoading:registerLoading, isSuccess:registerSuccess}] = useRegisterUserMutation()
  const[loginUser, {data:loginData, error:loginError, isLoading:loginLoading, isSuccess:loginSuccess}] = useLoginUserMutation()
  const navigate = useNavigate()
  
  const changeInputHandler = (e, type) => {
    const {name,value} = e.target
    if(type === "signup"){
      setSignupInput({...signupInput,[name]:value})
    }
    else{
      setLoginInput({...loginInput,[name]:value})
    }
    
  }

  const handleRegistration = async (type) => {
    setError(""); // Clear previous errors
    try {
      const inputData = type === "signup" ? {
        name: signupInput.name.trim(),
        email: signupInput.email.trim(),
        password: signupInput.password
      } : {
        email: loginInput.email.trim(),
        password: loginInput.password
      };
      
      console.log('Sending request with data:', {
        type,
        inputData: {
          ...inputData,
          password: '***' // Don't log actual password
        },
        timestamp: new Date().toISOString()
      });
      
      // Basic validation
      if (type === "signup" && (!inputData.name || !inputData.email || !inputData.password)) {
        const errorMsg = "All fields are required";
        console.warn('Validation failed:', errorMsg);
        setError(errorMsg);
        return;
      }
      
      if (!inputData.email || !inputData.password) {
        const errorMsg = "Email and password are required";
        console.warn('Validation failed:', errorMsg);
        setError(errorMsg);
        return;
      }
      
      const action = type === "signup" ? registerUser : loginUser;
      console.log('Executing action:', type);
      
      const result = await action(inputData);
      console.log('API Response:', {
        type,
        success: !result.error,
        data: result.data,
        error: result.error,
        timestamp: new Date().toISOString()
      });
      
      if (result.error) {
        const errorMessage = result.error.data?.message || 'An error occurred. Please try again.';
        console.error('API Error:', {
          status: result.error.status,
          message: errorMessage,
          fullError: result.error
        });
        setError(errorMessage);
      } else {
        console.log('Success:', result.data);
      }
    } catch (error) {
      console.error('Unexpected error during registration/login:', {
        error,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      setError('An unexpected error occurred. Please try again.');
    }
  }

  useEffect(() => {
    if(registerSuccess && registerData){
        toast.success(registerData.message||"Signup successfully")
    }
    if(loginSuccess && loginData){
        toast.success(loginData.message||"Login successfully")
        navigate("/")
    }
    if(registerError){
        toast.error(registerError.data.message||"Signup failed")
    }
    if(loginError){
        toast.error(loginError.data.message||"Login failed")
    }
  }, [loginLoading, registerLoading, loginData, registerData, loginError, registerError])
  
  return (
  <div className="flex w-full items-center justify-center mt-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Signup</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you are done.
                {error && (
                  <div className="mt-2 text-sm text-red-500">
                    {error}
                  </div>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name = "name" value = { signupInput.name} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your name"  required = {true}/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name = "email" value = { signupInput.email} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your email" required = {true}/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name = "password" value = { signupInput.password} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your password" required = {true}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerLoading} onClick={() => handleRegistration("signup")}>
                {
                  registerLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />please wait...
                    </>
                  ):("Signup")
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
               Login to your account and click login when you are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email</Label>
                <Input type="email" name = "email" value = { loginInput.email} onChange={(e) => changeInputHandler(e,"login")} placeholder="Enter your email" required = "true"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-password">Password</Label>
                <Input type="password" name = "password" value = { loginInput.password} onChange={(e) => changeInputHandler(e,"login")} placeholder="Enter your password" required = "true"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled = {loginLoading} onClick = {() => handleRegistration("login")}>{loginLoading ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />please wait...
                </>
              ):("Login")}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  )
}

export default Login 

