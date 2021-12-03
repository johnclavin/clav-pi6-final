import './Register.css';
import photo from './alienBiology.png';

const Contact = () => {
  return (
    <div id='register'>
      <h2>Register or Sign-in</h2>
      <div id="pho">
        <img src={photo} width={300} height={300}></img>
      </div>
    </div>
  );
};

export default Contact;
