import ssTextLogo from '../../../images/ss-text-logo.svg';

function Home() {
    return (
        <>
            <div className='home__logo__container'>
                <img 
                    src={ssTextLogo} 
                    alt='ss-text-logo'
                />
            </div>
        </>
    );
};

export default Home;