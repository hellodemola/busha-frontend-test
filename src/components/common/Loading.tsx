import Loader from "../shared/Loader";

function Loading () {
    return (
        <div id="loading" className="h-screen">
        <Loader size={70} width={6} />
        <p style={{color: 'white'}}>Loading...</p>
      </div>
    )
};

export default Loading;