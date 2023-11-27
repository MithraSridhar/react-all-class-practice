import { Counter } from "../Counter";


export function UserList() {

  const profile = [
    {
      name: "jack",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
    },
    {
      name: "john",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
    {
      name: "peter",
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];

  return (
    <div>

      {profile.map((profile) => {
        return (
          <div>
            <img className="profile-pic" src={profile.pic} alt={profile.name} />
            <h1>Hi {profile.name}</h1>
            <Counter />
          </div>
        );
      }
      )}
    </div>
  );
}
