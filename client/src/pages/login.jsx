import { AppWindowIcon, CodeIcon } from "lucide-react"

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
import { useState } from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
  const [signupInput, setSignupInput] = useState({name:"",email:"",password:""})
  const [loginInput, setLoginInput] = useState({email:"",password:""})

  const changeInputHandler = (e, type) => {
    const {name,value} = e.target
    if(type === "signup"){
      setSignupInput({...signupInput,[name]:value})
    }
    else{
      setLoginInput({...loginInput,[name]:value})
    }
    
  }

  const handleRegistration = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput
   console.log(inputData);
  }
  
  return (
  <div className="flex w-full items-center justify-center">
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
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name = "name" value = { signupInput.name} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your name"  required = "true"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name = "email" value = { signupInput.email} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your email" required = "true"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name = "password" value = { signupInput.password} onChange={(e) => changeInputHandler(e,"signup")} placeholder="Enter your password" required = "true"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick = {() => handleRegistration("signup")}>Signup</Button>
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
              <Button onClick = {() => handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  )
}

export default Login 

