import CautionIcon from '../../assets/icons/caution.svg';
import CancelIcon from '../../assets/icons/cancel.svg';

function NetworkToaster () {
    return (
        <div style={{marginTop: '2em', padding: '1em', color: '#D72C0D', border: '2px outline #E0B3B2', fontWeight: 500, background: '#FFF4F4', display: 'flex', justifyContent: 'space-between', gap: '2px', borderRadius: '3px'}}>
            <div style={{ display: 'flex', gap: '2px'}}>
            <img src={CautionIcon} alt="caution" />
            Network Error
            </div>
            <img src={CancelIcon} alt="caution" />
        </div>
    )
}

export default NetworkToaster;