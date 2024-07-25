import './App.css'
export default function User({ user }) {

    const {
        avatar_url,
        followers,
        following,
        public_repos,
        login,
        created_at,
    } = user;
    const createdDate = new Date(created_at);


    return <div className='parent'>
        <img src={avatar_url} alt="profile pic"></img>
        <div className='data'>
        <h3> Name :{login}</h3>
        <h3>Public Repos :{public_repos}</h3>
        <h3>Joined in :{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
        })} ${createdDate.getFullYear()}`} </h3>
        <h3>Followers :{followers}</h3>
        <h3>following :{following}</h3>
        </div>



    </div>
}