import {useQueryQuery} from '../../generated/graphql'



export const LaunchList = () => {
    const {loading, data} = useQueryQuery()
    console.log(loading)
    console.log(data?.Page?.media)
    return (<div>
        <h3>Launches</h3>
            {loading ? (<p>Loading...</p>) : (
                <ul>
                    {data && data?.Page?.media?.map(item => (
                        <li>
                            <p>{item?.title?.english}</p>
                            <p>{item?.title?.native}</p>
                            <p>{item?.episodes}</p>
                            {item?.bannerImage ? <img src={item?.bannerImage} alt=''/> : null}
                        </li>
                    ))}
                </ul>
            )}
    </div>
    )
}

