import React from 'react';
 
class SignUp extends React.Component {
  render() {
    return (
        <div className="formContainer">
        <form className="actualForm">
        <h3>Get Access</h3>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="integer" name="age" placeholder="age" />

        </div>
        <div>
          <input type="text" name="summary" placeholder="Summary" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="SignUp" />
      </form>
      <div className="fullscreen-video-wrap">
        <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GIRL_ON_SHOULDERS.mov69900.webm" autoPlay="true" loop="true"></video>
    </div>
    </div>
    );
  }
}
 
export default SignUp;