import React from "react";
import * as Components from './Components';
import { useNavigate} from "react-router-dom";
function App() {
    const [signIn, toggle] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const navigate=useNavigate();
    const navigateToServicesPage = () => {
      navigate('/services');
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleSignUp = (e) => {
      e.preventDefault();
      if (!password.match(/^(?=.*[A-Z]).{8,12}$/)) {
        alert(
          'Password must contain a capital letter, and the number of characters should be 8 to 12.'
        );
        return;
      }
      // Handle sign-up logic
    };

    const handleSignIn = (e) => {
      e.preventDefault();
      if (!password.match(/^(?=.*[A-Z]).{8,12}$/)) {
        alert(
          'Password must contain a capital letter, and the number of characters should be 8 to 12.'
        );
        return;
      }
      // Handle sign-in logic
    };

     return(
      <div style={{position: "fixed", top: "30%", left: "30%", transform: "translate(-50%, -50%);"}}>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleSignUp}>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' required/>
                     <Components.Input type='email' placeholder='Email' required/>
                     <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} required/>
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSignIn}>
                      <Components.Title>Sign In</Components.Title>
                      <Components.Input type='email' placeholder='Email' required/>
                      <Components.Input type='password' placeholder='Password' required/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button type="submit" onClick={navigateToServicesPage}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Existing User?</Components.Title>
                     <Components.Paragraph>
                         Please login with your personal info and <br/>pick up from where you left
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Don't have an account?</Components.Title>
                       <Components.Paragraph>
                        Enter your details and start your<br/> journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
     )
}

export default App;

