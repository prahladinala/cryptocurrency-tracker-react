import React from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';
function Home() {
    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState([]);
    const handler = e => {
        setSearch(e.target.value);
    }

    React.useEffect(() => {
        axios.get('https://api.coinstats.app/public/v1/coins').then(
            res => setData(res.data.coins)
        )
    }, [])
    return (
        <>
            <div className='header'>
                <input value={search} onChange={handler} placeholder='Search for Crypto' />
            </div>
            {
                data.length > 0 &&
                <div className='grid-container'>
                    {data.filter(crypto =>
                        crypto.name.toLowerCase().includes(search.toLowerCase())
                    ).map(crypto =>
                        <ImgCard
                            name={crypto.name}
                            rank={crypto.rank}
                            price={crypto.price}
                            marketCap={crypto.marketCap}
                            key={crypto.id}
                            url={crypto.icon}
                        />
                    )}
                </div>
            }
        </>
    );
}

export default Home;
