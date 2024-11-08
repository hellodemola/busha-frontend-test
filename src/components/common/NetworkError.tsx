import ErrorIcon from '../../assets/icons/error.svg';
import Button from './Button';

function NetworkError () {
  return (
    <div className="h-screen centre">
      <div className=''>
        <img src={ErrorIcon} alt="logo" />
        <p>Network Error</p>
        <Button>Try again</Button>

      </div>
    </div>
  )
}

export default NetworkError