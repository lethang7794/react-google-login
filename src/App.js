import './App.css';
import GoogleLogin from 'react-google-login';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <GoogleLogin
          clientId={googleClientId}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
